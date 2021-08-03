// second column of the 2nd row (datatable with films list)
import { film_list } from "../../variables.js";
const options = new webix.DataCollection({ url:"components/main/dashboard/data/categories.js" });
export const movieList = {
  view: "datatable",
  scheme:{
    $init:function(obj){
      obj.categoryId = Math.floor(Math.random()*(4-1+1))+1;
    }
  },
  columns:[
    {id: "rank", header: [{text: "", rowspan: 2}], css:"rank",  width:50},
    {id: "title", header: ["Film Title", {content: "textFilter"}], width: 200, fillspace: true, sort:"string"},
    {id: "year", header: ["Realesed", {content: "textFilter"}], sort:"string"},
    {id: "votes", header: ["Votes", {content: "textFilter"}], sort:"string"},
    {id: "rating", header:["Rating", {content: "textFilter"}], sort:"string"},
    {id: "categoryId", header:["Category", {content: "textFilter"}], collection: options },
    {template: "{common.trashIcon()}"},
    ],
  url: "components/main/dashboard/data/data.js",
  hover: "myhover",
  gravity: 2.5,
  scrollX: false,
  select: true,
  id: film_list,
  onClick:{
    "wxi-trash": function(e,id){
          this.remove(id);
          return false;
    }
  }  
};