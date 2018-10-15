import ApiPageService from "iw-service/page.service";

export default class ProductsMockService extends ApiPageService {
  constructor() {
    super();
    this.mockProductsItems = [
      {
        id: 1,
        banners: [
          {
            id: 10111,
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
            title: "Products",
            link: "",
            summary:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam cumque iure commodi illo, a atque iusto molestias. Neque, pariatur!"
          }
        ],
        name: "Lorem Ipsum",
        title: "Lorem Ipsum",
        url: "/product/product-item-a/",
        meta: {
          title: "Mock Product: Lorem Ipsum",
          description: "",
          keywords: "",
          creator: "John Doe",
          date: "01/01/2018"
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi tempora sit culpa dignissimos quaerat nihil, atque debitis voluptates perspiciatis accusantium, ducimus. Saepe hic maiores dolore nobis maxime culpa assumenda, veritatis similique dolor qui obcaecati explicabo deserunt. Neque, suscipit pariatur, omnis est velit aspernatur esse. Deserunt officia reprehenderit, blanditiis mollitia!</p>",
        html:
          "<ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>",
        template: "Products",
        isHidden: false
      },
      {
        id: 2,
        banners: [
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
            title: "Products",
            link: "",
            summary:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam cumque iure commodi illo, a atque iusto molestias. Neque, pariatur!"
          }
        ],
        name: "Dolor sit",
        title: "Dolor sit",
        url: "/product/product-item-b/",
        meta: {
          title: "Mock Product: Dolor sit",
          description: "",
          keywords: "",
          creator: "John Doe",
          date: "01/01/2018"
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi tempora sit culpa dignissimos quaerat nihil, atque debitis voluptates perspiciatis accusantium, ducimus. Saepe hic maiores dolore nobis maxime culpa assumenda, veritatis similique dolor qui obcaecati explicabo deserunt. Neque, suscipit pariatur, omnis est velit aspernatur esse. Deserunt officia reprehenderit, blanditiis mollitia!</p>",
        html:
          "<ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>",
        template: "Products",
        isHidden: false
      },
    ];
  }
  getPage({ id, url, data }) {
    let children = this.mockProductsItems;
    return Promise.resolve({
      banners: [
        {
          id: 10116,
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
          title: "Products",
          link: "",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam cumque iure commodi illo, a atque iusto molestias. Neque, pariatur!"
        }
      ],
      meta: {
        title: "Mock Our Products Page",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur.</p>",
      template: "Products",
      id: 10001,
      name: "en",
      title: "Our Products",
      summary:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
      url: "/product/",
      thumbnail: {
        title: "home-thumbnail.png",
        imageUrl: "/img/mock/home-thumbnail.png",
        alternateText: "home-thumbnail.png",
        width: 540,
        height: 540
      },
      children,
      isHidden: false
    });
  }
  getProductsDetailPage({ id, url, data }) {
    return Promise.resolve(
      this.mockProductsItems.find(n => n.url === data.url)
    );
  }
}
