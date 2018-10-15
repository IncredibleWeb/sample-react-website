import ApiService from "./service";

const ITEM_COUNT_HEADER = "page";
const PAGE_COUNT_HEADER = "pagesize";

export default class ApiPaginatedService extends ApiService {
  constructor() {
    super();

    this.instance.interceptors.response.use(response => {
      if (
        response.status === 200 &&
        response.data &&
        typeof response.data === "object"
      ) {
        response.data.pagination = {
          pageCount: parseInt(response.headers[PAGE_COUNT_HEADER]),
          itemCount: parseInt(response.headers[ITEM_COUNT_HEADER])
        };
      }

      return response;
    });
  }
}
