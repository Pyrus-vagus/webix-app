import { header } from "./components/header/header.js";
import { footer } from "./components/footer/footer.js";
import { side } from "./components/side/side.js";
import { main } from "./components/main/main.js"
import { film_form, film_list, side_list, list_input, user_list, popup} from "./components/variables.js";

webix.ready(function () {
  webix.ui({
      rows: [header, {cols:[side, { view: "resizer" }, main]}, footer],
  });
  webix.ui({
    view: "popup",
    id: popup,
    width: 200,
    body:{
      view: "list",
      data:[
        "Settings", "Log Out"],
      autoheight: true,
      select:true,
    }
  })
  $$(side_list).select("Dashboard");  
  // $$(film_list).attachEvent("onAfterSelect", function(id){
  //   const values = $$(film_list).getItem(id);
  //   $$(film_form).setValues(values);
  // })
  $$(film_form).bind($$(film_list))
  $$(list_input).attachEvent("onTimedKeyPress",function(){
    const value = this.getValue().toLowerCase();
    $$(user_list).filter(function(obj){
      return obj.name.toLowerCase().indexOf(value) !== -1;
    })
  });

 
});   