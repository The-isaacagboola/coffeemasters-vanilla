const Router = {
  init: () => {
    Array.from(document.getElementsByClassName("navlink")).forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.href; // or simply a.href
        const url2 = event.target.getAttribute("href"); // or simply a.getAttribute("href")...... Either of these two would work

        window.addEventListener("popstate", (event) => {
          Router.go(event.state.route, false);
        });
        Router.go(url2);
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log("going to ", route);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");

        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }
    if (pageElement) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};
export default Router;
