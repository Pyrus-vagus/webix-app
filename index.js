import { header } from "./components/header/header.js";
import { footer } from "./components/footer/footer.js";
import { side } from "./components/side/side.js";
import { main } from "./components/main/main.js"
import { formID, movieListID, sideListID, list_input, userListID, } from "./components/variables.js";

webix.ready(function () {
  webix.ui({
      rows: [header, {cols:[side, { view: "resizer" }, main]}, footer],
  });
  $$(sideListID).select("Dashboard");  
  $$(movieListID).attachEvent("onAfterSelect", function(id){
    const values = $$(movieListID).getItem(id);
    $$(formID).setValues(values);
  })
  $$(list_input).attachEvent("onTimedKeyPress",function(){
    const value = this.getValue().toLowerCase();
    $$(userListID).filter(function(obj){
      return obj.name.toLowerCase().indexOf(value) !== -1;
    })
  });
});   