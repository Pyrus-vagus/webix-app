// second column of the 2nd row (datatable with films list)
import { film_list, selector } from "../../variables.js";
const options = new webix.DataCollection({ url:"components/main/dashboard/data/categories.js" });
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
  scheme:{
    $init:function(obj){
      obj.categoryId = Math.floor(Math.random()*(4-1+1))+1;
  },
  $sort:{
    by:"year",
    dir:"desc",
  }
  },
  columns:[
    {id: "rank", header: [{text: "", rowspan: 2}], css:"rank",  width:50},
    {id: "title", header: ["Film Title", {content: "textFilter"}], width: 200, fillspace: true, sort:"string"},
    {id: "categoryId", header:["Category", {content: "selectFilter"}], collection: options },
    {id: "votes", header: ["Votes", {content: "textFilter"}], sort:"string"},
    {id: "rating", header:["Rating", {content: "textFilter"}], sort:"string"},
    {id: "year", header: ["Year"], sort:"string"},
    {template: "{common.trashIcon()}"},
    ],
  url: "components/main/dashboard/data/data.js",
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