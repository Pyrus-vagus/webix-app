// second column of the 2nd row (datatable with films list)
import { film_list, selector, options, filmCollection } from "../../variables.js";
const filterTab = {
  view:"segmented", id: selector, inputWidth:400, css: "tab",
  options:[
    {id:1, value:"All"},
    {id:2, value:"Old"},
    {id:3, value: "Modern"},
    {id:4, value: "New"}
  ], 
  on:{
    onChange:function(){
      $$(film_list).filterByAll();
    }
  } 
} 
const dataTable = {
  view: "datatable",
  
  columns:[
    {id: "rank", header: [{text: "", rowspan: 2}], css:"rank",  width:50},
    {id: "title", header: ["Film Title", {content: "textFilter"}], width: 200, fillspace: true, sort:"string"},
    {id: "categoryId", header:["Category", {content: "selectFilter"}], collection: options },
    {id: "votes", header: ["Votes", {content: "textFilter"}], sort:"int"},
    {id: "rating", header:["Rating", {content: "textFilter"}], sort:"int"},
    {id: "year", header: ["Year"], sort:"int", },
    {template: "{common.trashIcon()}"},
    ],
  hover: "myhover",
  scrollX: false,
  select: true,
  id: film_list,
  onClick:{
    "wxi-trash": function(e,id){
          this.remove(id);
          return false;
    }
  }  
}
export const movieList = {
  rows:[
    filterTab,
    dataTable,
  ],
  gravity: 2.5,
};
