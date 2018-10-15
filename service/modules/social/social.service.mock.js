import ApiService from "iw-service/service";

export default class SocialMockService extends ApiService {
  get({ id, url, data }) {
    return Promise.resolve([
      {
        id: 10101,
        title: "Facebook",
        url: "https://www.fb.com/",
        platform: "Facebook"
      },
      {
        id: 10102,
        title: "Instagram",
        url: "https://www.instagram.com/",
        platform: "Instagram"
      },
      {
        id: 10103,
        title: "Twitter",
        url: "https://www.twitter.com/",
        platform: "Twitter"
      }
    ]);
  }
}
