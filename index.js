import { header } from "./components/header/header.js";
import { footer } from "./components/footer/footer.js";
import { side } from "./components/side/side.js";
import { main } from "./components/main/main.js";
import { film_form, film_list, side_list, list_input, user_list, popup, currYear, selector, user_chart, options, admin_table, admin_form, userCollection } from "./components/variables.js";

webix.GroupMethods.amount = function(prop, data){
  if (!data.length) return 0;
  return prop = data.length;
};
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
  $$(film_form).bind($$(film_list))
  $$(list_input).attachEvent("onTimedKeyPress",function(){
    const value = this.getValue().toLowerCase();
    $$(user_list).filter(function(obj){
      return obj.name.toLowerCase().indexOf(value) !== -1;
    })
  });
  $$(film_list).registerFilter(
    $$(selector), 
    { columnId:"year", compare:function(value, filter, item){
      const year = parseInt(value);
      if(filter == 1)  return year;
      else if(filter == 2 ) return year <= 1990;
      else if (filter == 3) return year > 1990 && year< currYear-5;
      else return year >= currYear-5;
   
    }},
    { 
      getValue:function(node){
        return node.getValue();
      },
      setValue:function(node, value){
        node.setValue(value);
      }
    }
  );
  $$(user_chart).sync(userCollection, function(){
    this.group({
      by: "country",
      map:{
        age: ["age", "amount"]
      }
    });
  }) ;
  $$(admin_table).sync(options);
  $$(admin_form).bind($$(admin_table));
  $$(user_list).sync(userCollection);
 
});   