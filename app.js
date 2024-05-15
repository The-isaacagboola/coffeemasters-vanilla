import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";

//to make these imported modules global; we can simply attach them to the global window object METHOD 1
window.app = {};
app.store = Store;

// window.addEventListener("DOMContentLoaded", async () => {
//   const menu = await API.fetchMenu();
// });

//METHOD 2: MAke a seperate menu.js file to load the data
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
