import ApiPageService from "iw-service/page.service";

export default class PagesMockService extends ApiPageService {
  get({ id, url, data }) {
    return Promise.resolve(
      [
        {
          children: [],
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "About Us",
            link: "",
            summary:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam cumque iure commodi illo, a atque iusto molestias. Neque, pariatur!"
          },
          meta: {
            title: "Mock About Us Page",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi tempora sit culpa dignissimos quaerat nihil, atque debitis voluptates perspiciatis accusantium, ducimus. Saepe hic maiores dolore nobis maxime culpa assumenda, veritatis similique dolor qui obcaecati explicabo deserunt. Neque, suscipit pariatur, omnis est velit aspernatur esse. Deserunt officia reprehenderit, blanditiis mollitia!</p>",
          template: "Page",
          id: 10002,
          name: "About Us",
          title: "About Us",
          summary:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
          url: "/about-us/",
          isHidden: false
        },
        {
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "",
            link: "",
            summary: ""
          },
          meta: {
            title: "Mock Page A",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur. Natus eum quasi eius, unde et libero.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit doloribus eaque similique voluptas et veritatis molestias tempora id aut dolorum non nulla, voluptate voluptatem. Illum, in, veniam. Exercitationem facere amet, qui odio expedita, quam laborum consectetur doloribus repudiandae ipsam maxime delectus illum quasi, fugiat hic eius rem ea aspernatur laboriosam. Nesciunt obcaecati consequuntur praesentium repudiandae incidunt mollitia delectus harum ex alias eius, fugit sint quaerat dolorem aspernatur quisquam, dicta ducimus saepe laboriosam at, eum molestias unde nihil fuga vero? Voluptatum error exercitationem, quam pariatur cupiditate officiis, eligendi atque autem qui libero asperiores dolor reprehenderit laboriosam in reiciendis inventore quasi non enim unde. Corporis recusandae mollitia aspernatur ab, asperiores qui perspiciatis optio placeat vero. Culpa alias id vitae veniam autem dolore debitis, porro labore obcaecati consectetur ullam molestiae illo eaque necessitatibus, in earum commodi facere cum, atque expedita eligendi ipsam delectus vero ratione qui. Quaerat, aut officiis repellat animi doloremque praesentium magnam quidem ab consectetur reprehenderit voluptate laboriosam et numquam, dicta ad fugiat cum iusto odio eaque veritatis. Saepe necessitatibus nihil, earum hic rem maiores iusto, inventore pariatur molestias cumque explicabo, dolorem autem nesciunt! Beatae veritatis, non, architecto quam est, esse deserunt temporibus reprehenderit, ipsum ad quidem sunt corrupti magni.</p>",
          template: "Page A",
          id: 10011,
          name: "Page A",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ab.",
          summary:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
          url: "/page-a/",
          isHidden: false
        },
        {
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "",
            link: "",
            summary: ""
          },
          meta: {
            title: "Mock Page B",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur. Natus eum quasi eius, unde et libero.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit doloribus eaque similique voluptas et veritatis molestias tempora id aut dolorum non nulla, voluptate voluptatem. Illum, in, veniam. Exercitationem facere amet, qui odio expedita, quam laborum consectetur doloribus repudiandae ipsam maxime delectus illum quasi, fugiat hic eius rem ea aspernatur laboriosam. Nesciunt obcaecati consequuntur praesentium repudiandae incidunt mollitia delectus harum ex alias eius, fugit sint quaerat dolorem aspernatur quisquam, dicta ducimus saepe laboriosam at, eum molestias unde nihil fuga vero? Voluptatum error exercitationem, quam pariatur cupiditate officiis, eligendi atque autem qui libero asperiores dolor reprehenderit laboriosam in reiciendis inventore quasi non enim unde. Corporis recusandae mollitia aspernatur ab, asperiores qui perspiciatis optio placeat vero. Culpa alias id vitae veniam autem dolore debitis, porro labore obcaecati consectetur ullam molestiae illo eaque necessitatibus, in earum commodi facere cum, atque expedita eligendi ipsam delectus vero ratione qui. Quaerat, aut officiis repellat animi doloremque praesentium magnam quidem ab consectetur reprehenderit voluptate laboriosam et numquam, dicta ad fugiat cum iusto odio eaque veritatis. Saepe necessitatibus nihil, earum hic rem maiores iusto, inventore pariatur molestias cumque explicabo, dolorem autem nesciunt! Beatae veritatis, non, architecto quam est, esse deserunt temporibus reprehenderit, ipsum ad quidem sunt corrupti magni.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sapiente, vitae? Labore distinctio, nostrum in odio necessitatibus delectus? Illum consectetur repellendus quibusdam, adipisci doloremque nam deserunt aspernatur dicta culpa eum hic, nemo fugiat ratione et alias eveniet odit, laboriosam iure quod. Et obcaecati doloremque quo, placeat beatae eius, commodi consectetur cumque, id ex iusto animi maiores natus architecto! Mollitia iusto impedit voluptates placeat, quod, accusamus fugit? In, error, ipsa. Possimus ducimus, quae natus recusandae excepturi suscipit vel debitis voluptate eos sed, veniam blanditiis quaerat ipsum velit porro atque beatae iure. Eligendi ut aperiam voluptates quam qui magnam tenetur dolorem, veniam quaerat magni dolor odit quidem est hic, dicta commodi earum. Quidem magnam explicabo reiciendis molestias doloremque vel, molestiae asperiores eius. Autem iure, illum molestiae omnis natus, officiis! Obcaecati excepturi, perspiciatis eius sit doloribus nihil illum deleniti, aliquid voluptas reprehenderit molestias ipsum repellat cumque odit et ad fugiat. Doloribus dolor ipsa, reprehenderit quisquam voluptatem provident, repellendus in iusto numquam voluptate eaque pariatur dolorum accusamus quaerat obcaecati labore temporibus repellat esse placeat. Incidunt, nemo tenetur vero ratione aut, corporis. Similique vitae hic asperiores ipsa quia dolorem quas et impedit eum eligendi voluptatibus laboriosam dolore, recusandae quis, explicabo eveniet molestias delectus magnam architecto. Hic officia, ut quisquam est? Dicta, ratione. At excepturi non voluptatibus dolorum dolor, provident maxime in quod tempora quis! Natus, dolore sapiente accusamus quod culpa, vero accusantium molestias, fugit doloremque doloribus voluptate quidem! Repudiandae mollitia, esse ea consectetur officiis unde nostrum fuga rerum molestias perspiciatis libero quibusdam, suscipit quos doloribus sequi, perferendis maiores asperiores odit quis architecto facere nihil! Iure, sequi nostrum odio numquam alias, aliquid atque exercitationem maxime voluptatem. Vitae quaerat, incidunt reprehenderit molestias! Iure ratione, adipisci quibusdam incidunt magni vitae culpa! Iusto fugit similique, consectetur aliquid incidunt id quam, sequi unde cumque fuga consequuntur. Minus id facilis nesciunt odio accusantium ex adipisci distinctio repellendus assumenda eum consequatur doloremque, vitae placeat et dolorem dolores impedit, harum explicabo eaque voluptatibus. Corporis eum maiores laborum tempora aperiam atque, quibusdam, soluta. Iure doloremque, ad molestiae repudiandae ducimus error nesciunt soluta natus corporis beatae commodi eligendi? Tempora sed minima modi libero assumenda reprehenderit voluptate quisquam! Error cupiditate voluptatibus perspiciatis ut in facere placeat sed sit nemo necessitatibus aspernatur ea iure quibusdam, dicta inventore dolorem incidunt alias nostrum facilis molestias, quam voluptatem velit tenetur recusandae temporibus. Maxime mollitia atque veritatis dicta, enim omnis, repellat perferendis, consectetur voluptatibus temporibus beatae obcaecati quis voluptate ea optio.</p>",
          template: "Page B",
          id: 10032,
          name: "Page B",
          title: "Lorem ipsum dolor sit amer.",
          summary:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
          url: "/page-b/",
          isHidden: false
        },
        {
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "",
            link: "",
            summary: ""
          },
          meta: {
            title: "Page not Found",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
          template: "Page not Found",
          id: 10004,
          name: "Page not Found",
          title: "404 - Page not Found!",
          summary: "",
          url: "/page-not-found/",
          isHidden: true
        },
        {
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "",
            link: "",
            summary: ""
          },
          meta: {
            title: "Contact Us",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
          template: "Contact Us",
          id: 10005,
          name: "Contact Us",
          title: "Contact Us",
          summary: "",
          url: "/contact/",
          isHidden: false
        },
        {
          banner: {
            images: [
              {
                title: "banner.jpg",
                imageUrl: "/img/mock/banner.jpg",
                alternateText: "banner.jpg",
                width: 720,
                height: 290
              },
              {
                title: "banner-2x.jpg",
                imageUrl: "/img/mock/banner-2x.jpg",
                alternateText: "banner-2x.jpg",
                width: 1920,
                height: 774
              }
            ],
            title: "",
            link: "",
            summary: ""
          },
          meta: {
            title: "Thank You",
            description: "",
            keywords: "",
            creator: "John Doe",
            date: "01/01/2018"
          },
          html:
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
          template: "Thank You",
          id: 10006,
          name: "Thank You",
          title: "Thank You",
          summary: "",
          url: "/contact/thank-you",
          isHidden: true
        }
      ].find(n => n.url === data.url)
    );
  }
}
