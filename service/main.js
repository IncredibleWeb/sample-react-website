/* This class is used to define which modules will be consumed from Api
   and which will be overridden.
   Follows the singleton pattern: https://www.sitepoint.com/javascript-design-patterns-singleton/ */

/* Import default modules & services
   - remove modules which are not to be consumed
*/
import Router from "iw-service/router/router";
import Home from "iw-service/home/home";
import Pages from "iw-service/pages/pages";
import Navigation from "iw-service/navigation/navigation";
import Credits from "iw-service/credits/credits";
import QuickLinks from "iw-service/quickLinks/quickLinks";
import Social from "iw-service/social/social";
import Products from "iw-service/products/products";
import Contact from "iw-service/contacts/contacts";
import News from "iw-service/news/news";

class Main {
  constructor() {
    if (!Main.instance) {
      this.router = new Router();
      this.pages = new Pages();
      this.home = new Home();
      this.navigation = new Navigation();
      this.credits = new Credits({});
      this.quickLinks = new QuickLinks();
      this.products = new Products();
      this.social = new Social();
      this.contact = new Contact();
      this.news = new News();

      Main.instance = this;
    }

    return Main.instance;
  }
}

const instance = new Main();
Object.freeze(instance);
export default instance;
