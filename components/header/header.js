import { popup } from "../variables.js";

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
      popup: popup
      
    },
  ],
};
