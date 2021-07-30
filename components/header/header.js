// first row of the layout
export const header = {
  view: "toolbar",
  type: "clean",
  css: "heading",
  elements: [
    {
      view: "template",
      type: "header",
      template: "My App!",
      css: "heading",
      borderless: true,
    },
    {},
    {
      padding: 5,
      view: "button",
      type: "icon",
      icon: "mdi mdi-account",
      label: "Profile",
      autowidth: true,
      css: "btn",
      popup: "poppy"
      
    },
  ],
};
webix.ui({
  view: "popup",
  id: "poppy",
  width: 200,
  body:{
    view: "list",
    data:[
      "Settings", "Log Out"],
    autoheight: true,
    select:true,
  }
})