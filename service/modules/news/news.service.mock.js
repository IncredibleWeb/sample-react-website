import ApiPageService from "iw-service/page.service";

export default class NewsMockService extends ApiPageService {
  constructor() {
    super();
    this.mockNewsItems = [
      {
        id: 1,
        title: "Lorem Ipsum",
        banners: [
          {
            id: 1111,
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banners/news.png",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banners/news-2x.png",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "News Category",
            link: "",
            summary:
              "Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt."
          }
        ],
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi tempora sit culpa dignissimos quaerat nihil, atque debitis voluptates perspiciatis accusantium, ducimus. Saepe hic maiores dolore nobis maxime culpa assumenda, veritatis similique dolor qui obcaecati explicabo deserunt. Neque, suscipit pariatur, omnis est velit aspernatur esse. Deserunt officia reprehenderit, blanditiis mollitia!</p>",
        html:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
        url: "/latest-news/item-a/",
        thumbnail: {
          title: "news-item-a.jpg",
          imageUrl: "/img/mock/home-thumbnail.png",
          alternateText: "news-item-a.jpg",
          width: 400,
          height: 267
        },
        template: "News",
        meta: {
          title: "Mock News: Lorem Ipsum",
          description: "",
          keywords: "",
          creator: "John Doe",
          date: "June 10, 2018"
        },
        name: "item-a",
        category: "PUBLICATIONS",
        date: "June 10, 2018",
        isHidden: false
      }
    ];

    this.mockNewsCategoryItems = JSON.parse(JSON.stringify(this.mockNewsItems));

    for (let i = this.mockNewsCategoryItems.length - 1; i >= 0; i--) {
      this.mockNewsCategoryItems[i].category = "PUBLICATIONS";
    }
  }

  getPage({ id, url, data }) {
    let newsList = this.mockNewsItems;

    const page = data.page;
    const pageSize = data.pageSize;

    const pageCount = Math.ceil(newsList.length / pageSize);
    const itemCount = newsList.length;

    newsList = newsList.slice((page - 1) * pageSize, page * pageSize);

    return Promise.resolve({
      pagination: {
        pageCount: pageCount,
        itemCount: itemCount
      },
      banners: [
        {
          id: 1100,
          images: [
            {
              title: "news.png",
              imageUrl: "/img/mock/banners/news.png",
              alternateText: "banner.jpg",
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
          title: "Updates & Publications",
          link: "",
          summary:
            "Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam."
        }
      ],
      meta: {
        title: "Mock News Page",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur.</p>",
      template: "News",
      id: 10001,
      name: "en",
      title: "News",
      summary:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
      url: "/latest-news/",
      thumbnail: {
        title: "home-thumbnail.png",
        imageUrl: "/img/mock/home-thumbnail.png",
        alternateText: "home-thumbnail.png",
        width: 540,
        height: 540
      },
      newsList,
      isHidden: false
    });
  }

  getNewsDetailPage({ id, url, data }) {
    return Promise.resolve(this.mockNewsItems.find(n => n.url === data.url));
  }

  getNewsCategoryPage({ id, url, data }) {
    let newsList = this.mockNewsCategoryItems;

    const page = data.page;
    const pageSize = data.pageSize;
    const pageCount = Math.ceil(newsList.length / pageSize);
    const itemCount = newsList.length;

    newsList = newsList.slice((page - 1) * pageSize, page * pageSize);

    return Promise.resolve({
      pagination: {
        pageCount: pageCount,
        itemCount: itemCount
      },
      banners: [
        {
          id: 1101,
          images: [
            {
              title: "banner.jpg",
              imageUrl: "/img/mock/banners/news.png",
              alternateText: "banner.jpg",
              width: 720,
              height: 290
            },
            {
              title: "banner-2x.jpg",
              imageUrl: "/img/mock/banners/news-2x.png",
              alternateText: "banner-2x.jpg",
              width: 1920,
              height: 774
            }
          ],
          title: "News Category",
          link: "",
          summary:
            "Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt."
        }
      ],
      meta: {
        title: "Mock News Page",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur.</p>",
      template: "News",
      id: 10001,
      name: "en",
      title: "News",
      summary:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
      url: "/latest-news/",
      thumbnail: {
        title: "home-thumbnail.png",
        imageUrl: "/img/mock/home-thumbnail.png",
        alternateText: "home-thumbnail.png",
        width: 540,
        height: 540
      },
      newsList,
      isHidden: false
    });
  }
}
