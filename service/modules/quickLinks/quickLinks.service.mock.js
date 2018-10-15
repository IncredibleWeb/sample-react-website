import ApiService from "iw-service/service";

export default class QuickLinksMockService extends ApiService {
  get({ id, url, data }) {
    return Promise.resolve([
      {
        id: 10060,
        title: "Contact",
        links: [
          {
            title: "Incredible Web Ltd.",
            url: "https://goo.gl/maps/v1n8knp6swy",
            isNewWindow: true,
            isInternal: false
          },
          {
            title: "+356 2121 2121",
            url: "tel:+35621212121",
            isNewWindow: true,
            isInternal: false
          },
          {
            title: "info@incredible-web.com",
            url: "mailto:info@incredible-web.com",
            isNewWindow: true,
            isInternal: false
          }
        ]
      },
      {
        id: 10061,
        title: "Lorem ipsum",
        links: [
          {
            title: "Dolor sit amet",
            url: "/page-a",
            isNewWindow: false,
            isInternal: true
          },
          {
            title: "Dolor sit amet",
            url: "/page-b",
            isNewWindow: false,
            isInternal: true
          }
        ]
      }
    ]);
  }
}
