import ApiService from "iw-service/service";

export default class NavigationMockService extends ApiService {
  get({ id, url, data }) {
    const nav = {
      id: 10001,
      title: "Home Page",
      name: "en",
      url: "/",
      children: [
        {
          id: 10011,
          title: "Page A",
          name: "Page A",
          url: "/page-a/",
          children: [],
          lastEdited: "2018-01-01T12:00:00",
          icon: {
            title: "page-a.svg",
            imageUrl: "/img/mock/page-a.svg",
            alternateText: "page-a.svg",
            width: "",
            height: ""
          }
        },
        {
          id: 10002,
          title: "Page B",
          name: "Page B",
          url: "/page-b/",
          children: [],
          lastEdited: "2018-01-01T12:00:00",
          icon: {
            title: "page-b.svg",
            imageUrl: "/img/mock/page-b.svg",
            alternateText: "page-b.svg",
            width: "",
            height: ""
          }
        },
        {
          id: 10003,
          title: "Contact",
          name: "Contact",
          url: "/contact/",
          children: [],
          lastEdited: "2018-01-01T12:00:00",
          icon: {
            title: "contact.svg",
            imageUrl: "/img/mock/contact.svg",
            alternateText: "contact.svg",
            width: "",
            height: ""
          }
        }
      ],
      lastEdited: "2018-01-01T12:00:00",
      icon: {
        title: "home.svg",
        imageUrl: "/img/mock/home.svg",
        alternateText: "home.svg",
        width: "",
        height: ""
      }
    };

    // TODO: add support for breadcrumbs

    return Promise.resolve(nav);
  }
}
