import React from "react";
import { Switch, Route } from "react-router-dom";

import { fetchRoutes } from "./actions";
import Layout from "../layout/index";
import Home from "../home/index";
import Page from "../page/index";
import Products from "../product/index";
import ProductsSection from "../product/productSection";
import ProductsDetail from "../productDetail/index";
import News from "../news/index";
import NewsSection from "../news/newsSection";
import NewsDetail from "../newsDetail/index";

export const Routes = ({ routes, ...params }) => {
  return (
    <Layout>
      <Switch>
        {routes.map(route => {
          if (!(route.isPartial || route.isLayout)) {
            const Component = getRouteComponent(route.name).component;
            return (
              <Route
                key={route.url}
                path={route.url}
                render={props => <Component {...props} {...params} />}
                exact={route.exact}
              />
            );
          }
        })}
        <Route render={props => <Page {...props} url={"/page-not-found/"} />} />
      </Switch>
    </Layout>
  );
};

export const PartialRoutes = ({ routes, ...params }) => {
  return routes.map(route => {
    if (route.isPartial) {
      const Component = getRouteComponent(route.name).component;
      return (
        <Route
          key={route.url}
          path={route.url}
          render={props => <Component {...props} {...params} />}
          exact={route.exact}
        />
      );
    }
  });
};

export const getRoutes = store => {
  return store.dispatch(fetchRoutes());
};

const Empty = props => null;

export const getRouteComponent = name => {
  switch (name) {
    case "Home":
      return {
        component: Home,
        getReducers: [
          Home.getReducer,
          ProductsSection.getReducer,
          NewsSection.getReducer
        ],
        fetchData: [
          Home.fetchData,
          ProductsSection.fetchData,
          NewsSection.fetchData
        ]
      };

    case "Page":
    case "AboutUs":
      return {
        component: Page,
        getReducers: [Page.getReducer],
        fetchData: [Page.fetchData]
      };
    case "Products":
      return {
        component: Products,
        getReducers: [Products.getReducer],
        fetchData: [Products.fetchData]
      };
    case "ProductsDetail":
      return {
        component: ProductsDetail,
        getReducers: [ProductsDetail.getReducer],
        fetchData: [ProductsDetail.fetchData]
      };
    case "Contact":
      return {
        component: Contact,
        getReducers: [Contact.getReducer],
        fetchData: [Contact.fetchData]
      };
    case "News":
      return {
        component: News,
        getReducers: [News.getReducer],
        fetchData: [News.fetchData]
      };
    case "NewsDetail":
      return {
        component: NewsDetail,
        getReducers: [NewsDetail.getReducer],
        fetchData: [NewsDetail.fetchData]
      };
    case "NewsCategory":
      return {
        component: NewsCategory,
        getReducers: [NewsCategory.getReducer],
        fetchData: [NewsCategory.fetchData]
      };
    default:
      return {
        component: Empty,
        getReducers: [],
        fetchData: []
      };
  }
};
