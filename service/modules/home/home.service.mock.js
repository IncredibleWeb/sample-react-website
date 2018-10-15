import ApiPageService from "iw-service/page.service";

export default class HomeMockService extends ApiPageService {
  getPage({ id, url, data }) {
    return Promise.resolve({
      icon: {
        src: "/img/mock/logo_540w.png",
        alt: "Logo",
        title: "Logo Title",
        srcset: ""
      },
      banners: [
        {
          id: 1,
          images: [
            {
              title: "main-page.png",
              imageUrl: "/img/mock/banners/main-page.png",
              alternateText: "main-page.png",
              width: 720,
              height: 290
            },
            {
              title: "main-page.png",
              imageUrl: "/img/mock/banners/main-page-2x.png",
              alternateText: "main-page.png",
              width: 1920,
              height: 774
            }
          ],
          title: "Welcome to Sample React Website",
          link: "https://www.incredible-web.com",
          buttonTitle: "The Creators",
          summary:
            "Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt."
        },
        {
          id: 10112,
          images: [
            {
              title: "products.png",
              imageUrl: "/img/mock/banners/product.png",
              alternateText: "products.png",
              width: 720,
              height: 290
            },
            {
              title: "products.png",
              imageUrl: "/img/mock/banners/product-2x.png",
              alternateText: "products.png",
              width: 1920,
              height: 774
            }
          ],
          title: "Our Products",
          link: "",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam cumque iure commodi illo."
        },
        {
          id: 1101,
          images: [
            {
              title: "news.png",
              imageUrl: "/img/mock/banners/news.png",
              alternateText: "news.png",
              width: 720,
              height: 290
            },
            {
              title: "news.png",
              imageUrl: "/img/mock/banners/news-2x.png",
              alternateText: "news.png",
              width: 1920,
              height: 774
            }
          ],
          title: "News",
          link: "",
          summary:
            "Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam."
        }
      ],
      meta: {
        title: "Sample React Website",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur.</p>",
      template: "Home",
      id: 10001,
      name: "en",
      title: "Sample React Website",
      summary:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur</p>",
      url: "/",
      thumbnail: {
        title: "home-thumbnail.png",
        imageUrl: "/img/mock/home-thumbnail.png",
        alternateText: "home-thumbnail.png",
        width: 540,
        height: 540
      },
      isHidden: false
    });
  }
}
