 // first column of the 2nd row (list)
 export const side = {
  type: "clean",
  css: "side",
  rows: [
    {
      view: "list",
      id: "mylist",
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
        {id:"Locations", value: "Locations"}
      ],
      gravity: 10,
      css: "webix_list_item",
    },
    {
      template: "&#10004; Connected",
      height: 30,
      css: "bottom_side",
    },
  ],
};
