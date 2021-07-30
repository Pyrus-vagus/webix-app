// second column of the 2nd row (datatable with films list)
import { movieListID } from "../../variables.js";
export const movieList = {
  view: "datatable",
  columns:[
    {id: "rank", header: [{text: "", rowspan: 2}], css:"rank",  width:50},
    {id: "title", header: ["Film Title", {content: "textFilter"}], width: 200, fillspace: true, sort:"string"},
    {id: "year", header: ["Realesed", {content: "textFilter"}], sort:"string"},
    {id: "votes", header: ["Votes", {content: "textFilter"}], sort:"string"},
    {id: "rating", header:["Rating", {content: "textFilter"}], sort:"string"},
    {template: "<span class='webix_icon wxi-trash'></span>"},
    ],
  url: "components/main/dashboard/data/data.js",
  hover: "myhover",
  gravity: 2.5,
  scrollX: false,
  select: true,
  id: movieListID,
  onClick:{
    webix_icon: function(e,id){
          this.remove(id);
          return false;
    }
  }  
};