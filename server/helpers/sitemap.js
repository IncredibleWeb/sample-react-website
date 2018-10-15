import Api from "../../service/main";

export function generateXmlSitemap(req, res) {
  return getUrls().then(response => {
    const pathname = req.protocol + "://www." + req.headers.host;
    let xml =
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
      'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

    for (let i in response) {
      xml += "<url>";
      xml += "<loc>" + pathname + response[i].url + "</loc>";
      xml += "<lastmod>" + response[i].lastEdited + "</lastmod>";
      xml += "</url>";
      i++;
    }
    xml += "</urlset>";
    return xml;
  });
}

export function getUrls() {
  return Api.navigation.getSitemap();
}
