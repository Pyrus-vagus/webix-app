import { header } from "./components/header/header.js";
import { footer } from "./components/footer/footer.js";
import { side } from "./components/side/side.js";
import { main } from "./components/main/main.js"

webix.ready(function () {
  webix.ui({
      rows: [header, {cols:[side, { view: "resizer" }, main]}, footer],
  });
  $$("mylist").select("Dashboard");  
});   