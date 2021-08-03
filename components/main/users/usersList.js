import { userListID, list_input } from "../../variables.js";
export const userList = {
  rows:[
    { cols:[
      {view: "text", id: list_input, gravity: 8},
      { 
        view: "button",
        value: "Sort asc",
        css: "add_btn",
        click: function(){
          $$(userListID).sort("#name#", "asc")
        }
      },
      { 
        view: "button",
        value: "Sort desc",
        css: "add_btn",
        click: function(){
          $$(userListID).sort("#name#", "desc")
        }
      },
      ]
    },
    { 
        view: "list",
        id: userListID,
        select: true,
        url: "components/main/users/data/users.js",
        template: function(obj){
          return `${obj.name} from ${obj.country} <div class='webix_icon wxi-close'></div> `
        }, 
        onClick:{
          "wxi-close": function(e, id){
            this.remove(id);
            return false;
          }
        }    
    }
  ]
};