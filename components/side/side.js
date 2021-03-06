 // first column of the 2nd row (list)
 import { side_list } from "../variables.js";
 export const side = {
  type: "clean",
  css: "side",
  rows: [
    {
      view: "list",
      id: side_list,
      select: true,
      width: 150,
      scroll: false,
      on:{
        onAfterSelect: function(id){
          $$(id).show()
        }
      },
      data: [
        {id:"Dashboard", value: "Dashboard"},
        {id:"Users", value: "Users"},
        {id:"Products", value: "Products"},
        {id:"Admin", value: "Admin"}
      ],
      gravity: 10,
      css: "list_item",
    },
    {
      template: "&#10004; Connected",
      height: 30,
      css: "bottom_side",
    },
  ],
};
