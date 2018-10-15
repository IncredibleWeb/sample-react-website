/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux-immutable";

// global reducers
import { reducer as formReducer } from "redux-form/immutable";
import { routesReducer } from "../containers/routes/reducer";
import { appReducer } from "../containers/app/reducer";
import { pageReducer } from "../containers/page/reducer";
import { headerReducer } from "../containers/header/reducer";
import { footerReducer } from "../containers/footer/reducer";
import { homeReducer } from "../containers/home/reducer";
import { productsReducer } from "../containers/product/reducer";
import { productDetailReducer } from "../containers/productDetail/reducer";
import { contactReducer } from "../containers/contact/reducer";
import { newsReducer } from "../containers/news/reducer";
import { newsDetailReducer } from "../containers/newsDetail/reducer";

export default function createReducer(injectedReducers) {
  return combineReducers({
    form: formReducer,
    routes: routesReducer,
    app: appReducer,
    page: pageReducer,
    header: headerReducer,
    footer: footerReducer,
    home: homeReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    contact: contactReducer,
    news: newsReducer,
    newsDetail: newsDetailReducer,
    ...injectedReducers
  });
}
