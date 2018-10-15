import UmbracoPageService from "iw-service/page.service";

export default class ContactsMockService extends UmbracoPageService {
  getPage({ id, url, data }) {
    return Promise.resolve({
      banners: [
        {
          id: 10123,
          images: [
            {
              title: "banner.jpg",
              imageUrl: "/img/mock/banners/get-in-touch.png",
              alternateText: "banner.jpg",
              width: 720,
              height: 290
            },
            {
              title: "banner-2x.jpg",
              imageUrl: "/img/mock/banners/get-in-touch-2x.png",
              alternateText: "banner-2x.jpg",
              width: 1920,
              height: 774
            }
          ],
          title: "Get in touch",
          items: [
            {
              title: "PHONE CALL:",
              text: "Have aproblem and need a consultation? +356 2010 7771"
            },
            {
              title: "YOUR REQUEST:",
              text:
                "29/14, Vincenti Buildings, Strait Street, Valletta VLT 1432 Malta"
            }
          ]
        }
      ],
      meta: {
        title: "Contact",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
      template: "Contact",
      id: 10031,
      name: "Contact",
      title: "Contact",
      isMinimised: true,
      summary: "",
      url: "/contact/",
      items: [
        {
          title: "PHONE CALL:",
          text: "Have aproblem and need a consultation? +356 2010 7771"
        },
        {
          title: "YOUR REQUEST:",
          text:
            "29/14, Vincenti Buildings, Strait Street, Valletta VLT 1432 Malta"
        }
      ],
      isHidden: false
    });
  }

  submit(data) {
    return Promise.resolve({});
  }
}
