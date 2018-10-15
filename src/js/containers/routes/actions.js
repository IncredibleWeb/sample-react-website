import { SET_ROUTES } from "./constants";
import { getRoutes } from "../../../../server/routes";

const loadRoutes = data => {
  return {
    type: SET_ROUTES,
    data
  };
};

export const fetchRoutes = data => dispatch =>
  getRoutes(data)
    .then(response => {
      dispatch(
        loadRoutes(
          response.map(({ name, url, exact, isPartial, isLayout }) => {
            return {
              name,
              url,
              exact,
              isPartial,
              isLayout
            };
          })
        )
      );
      return response;
    })
    .catch(error => {
      throw error;
    });
