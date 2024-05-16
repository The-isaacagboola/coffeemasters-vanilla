const Router = {
  init: () => {
    Array.from(document.getElementsByClassName("navlink")).forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.href; // or simply a.href
        const url2 = event.target.getAttribute("href"); // or simply a.getAttribute("href")...... Either of these two would work

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
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
    }
    if (pageElement) {
    }
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};
export default Router;
