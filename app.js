import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//linking the created web component
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

//to make these imported modules global; we can simply attach them to the global window object METHOD 1
window.app = {};
app.store = Store;
app.router = Router;

/*
window.addEventListener("DOMContentLoaded", async () => {
  const menu = await API.fetchMenu();
});
*/

//METHOD 2: MAke a seperate menu.js file to load the data
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
