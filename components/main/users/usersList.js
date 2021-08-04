import { user_list, list_input } from "../../variables.js";
export const userList = {
  rows:[
    { cols:[
      {view: "text", id: list_input, gravity: 8},
      { 
        view: "button",
        value: "Sort asc",
        css: "add_btn",
        click: function(){
          $$(user_list).sort("#name#", "asc")
          updateStyles();
        }
      },
      { 
        view: "button",
        value: "Sort desc",
        css: "add_btn",
        click: function(){
          $$(user_list).sort("#name#", "desc");
          updateStyles();        
        }          
      },
      ]
    },
    { 
        view: "list",
        id: user_list,
        scheme:{
          $init: function(obj){
           if(obj.age < 26)
           obj.$css = "firstfive"
          }
        },
        select: true,
        url: "components/main/users/data/users.js",
        template: function(obj){
          return `${obj.name}, ${obj.age}, from ${obj.country} <div class='webix_icon wxi-close'></div> `
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
