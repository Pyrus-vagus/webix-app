import { user_list, list_input, countries, user_chart } from "../../variables.js";

webix.protoUI({
  name: "editlist",
}, webix.EditAbility, webix.ui.list);

export const userList = {
  rows:[
    { cols:[
      {view: "text", id: list_input, gravity: 8},
      { 
        view: "button",
        value: "Sort asc",
        css: "add_btn",
        click: function(){
          $$(user_list).sort("#name#", "asc");
          $$(user_chart).sort("#age#", "asc");
        }
      },
      { 
        view: "button",
        value: "Sort desc",
        css: "add_btn",
        click: function(){
          $$(user_list).sort("#name#", "desc");
          $$(user_chart).sort("#age#", "desc");   
        }          
      },
      { 
        view: "button",
        value: "Add new",
        css: "add_btn",
        click: function(){
          const newUser = {
            name: "John Smith",
            age:  Math.floor(Math.random()*(100-1+1))+1,
            country:  assignCountry(),
          }
          $$(user_list).add(newUser)
        }          
      },
      ]
    },
    { 
        view: "editlist",
        id: user_list,
        scheme:{
          $init: function(obj){
           if(obj.age < 26)
           obj.$css = "young"
          }
        },
        select: true,
        // url: "components/main/users/data/users.js",
        template: function(obj){
          return `${obj.name}, ${obj.age}, from ${obj.country} <div class='webix_icon wxi-close'></div> `
        }, 
        editable: true,
        editor: "text",
        editValue: "name",
        rules:{
          name: webix.rules.isNotEmpty,
        },
        onClick:{
          "wxi-close": function(e, id){
            this.remove(id);
            return false;
          }
        }, 
        
    }
  ]
};
function assignCountry(){
  let country;
  const countryId = Math.floor(Math.random()*(7-0+1))+0;
  countries.data.each((o, i) => i==countryId ? country = o["value"]: "");
  return country;
}