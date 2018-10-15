import MockService from "./router.service.mock";
import NodeCache from "node-cache";

// Settings for the route table cache. It needs both a TTL and a check period
// or it will never be cleared
const routeTableTTL = 30;
const cacheCheckPeriod = 60;
const routeTableCache = new NodeCache({
  stdTTL: routeTableTTL,
  checkperiod: cacheCheckPeriod
});

export default class Router {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  // Removes the domain and TLD, returning just the path requested
  // http://www.example.com/foo/bar becomes '/foo/bar'
  extractUrlPath(url) {
    let urlSections = url.split("/");
    urlSections = urlSections.filter(sectionString => {
      return sectionString.length > 0;
    });

    let urlPath = null;
    if (urlSections.length === 0) {
      urlPath = "/";
    } else {
      urlPath = "/" + urlSections.join("/");
      if (!urlPath.endsWith("/")) {
        urlPath = urlPath + "/";
      }
    }
    return urlPath;
  }

  isValidPath(urlPath) {
    return new Promise((resolve, reject) => {
      // Get the valid routes and resolve/reject accordingly
      this.getValidRoutes()
        .then(routes => {
          // if the urlPath is in the validRoutes list, then resolve that it is valid
          if (routes.indexOf(urlPath) >= 0) {
            resolve(true);
          }
          resolve(false);
        })
        .catch(error => {
          reject("Unable to validate path: " + error);
        });
    });
  }

  getRoutingTable() {
    return this.getCachedData("routeTable");
  }

  getValidRoutes() {
    return this.getCachedData("validRoutes");
  }

  getUrl(docType) {
    return this.getRoutingTable().then(routingTable => {
      return routingTable.urlsAndDocTypes.find(item => {
        return item.value === docType;
      }).key;
    });
  }

  getUrls(docTypes) {
    return this.getRoutingTable().then(routingTable => {
      let results = routingTable.urlsAndDocTypes.filter(item => {
        return docTypes.indexOf(item.value) > -1;
      });
      // convert into object
      let obj = {};
      for (let i = results.length - 1; i >= 0; i--) {
        obj[results[i].value] = results[i].key;
      }

      return obj;
    });
  }

  getCachedData(cacheKey) {
    const self = this;
    return new Promise((resolve, reject) => {
      routeTableCache.get(cacheKey, (err, value) => {
        if (!err) {
          // if no routing table is cached,
          // then it will retrieve a new routing table
          // from the Api API
          if (!value) {
            self
              .updateRoutingTable()
              .then(response => {
                routeTableCache.set("routeTable", response);
                routeTableCache.set(
                  "validRoutes",
                  this.extractValidRoutes(response)
                );
                resolve(routeTableCache.get(cacheKey));
              })
              .catch(error => {
                reject(error);
              });
          } else {
            // Otherwise, we retrieve the cached version
            resolve(value);
          }
        } else {
          console.error("Routing Cache error: " + err);
        }
      });
    });
  }

  extractValidRoutes(data) {
    let validRoutes = [];
    for (let index in data.urlsAndDocTypes) {
      validRoutes.push(this.extractUrlPath(data.urlsAndDocTypes[index].key));
    }
    return validRoutes;
  }

  // Returns the promise provided by the service to retrieve the
  // routing table from the API.
  updateRoutingTable() {
    return this.service.get({});
  }
}
