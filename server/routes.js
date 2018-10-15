/*
 * Local implementation of routing retrieved from API
 */
import Api from "../service/main";

export const getRoutes = () => {
  // retrieve the navigation from the shared Api SDK
  return Api.router.getRoutingTable().then(response => {
    // iterate route data to create Route components
    const routes = response.urlsAndDocTypes.reduce((array, item) => {
      if (item.value.toLowerCase() === "home") {
        array.push({
          url: item.key,
          name: "Home",
          exact: true
        });
      } else if (item.value.toLowerCase() === "page") {
        array.push({
          url: item.key,
          name: "Page",
          exact: true
        });
      } else if (item.value.toLowerCase() === "aboutus") {
        array.push({
          url: item.key,
          name: "AboutUs",
          exact: true
        });
      } else if (item.value.toLowerCase() === "productsfolder") {
        array.push({
          url: item.key,
          name: "Products",
          exact: true
        });
      } else if (item.value.toLowerCase() === "productsitem") {
        array.push({
          url: item.key,
          name: "ProductsDetail",
          exact: true
        });
      } else if (item.value.toLowerCase() === "newsfolder") {
        array.push({
          url: item.key,
          name: "News",
          exact: true
        });
      } else if (item.value.toLowerCase() === "newsitem") {
        array.push({
          url: item.key,
          name: "NewsDetail",
          exact: true
        });
      } else if (item.value.toLowerCase() === "contact") {
        array.push({
          url: item.key,
          name: "Contact",
          exact: true
        });
      }
      return array;
    }, []);

    return routes;
  });
};
