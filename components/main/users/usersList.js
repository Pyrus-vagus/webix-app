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
        }, 
        ready: updateStyles,
    }
  ]
};
function updateStyles(){
  $$(user_list).data.each(
    function(obj, index){
      if(index<5){
        this.updateItem(obj.id,{$css: "firstfive"} )
      } else {
        this.updateItem(obj.id, {$css: ""})
      }
    }
  )
}