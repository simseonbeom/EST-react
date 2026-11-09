import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
// import { PlanetPage } from "./pages/PlanetListPage.js";
// import { _PlanetPage } from "./pages/_PlanetListPage.js";
import { AvatarPage } from "./pages/AvatarPage.js";





const container = document.getElementById('app');

if(container){

  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage));
}

















