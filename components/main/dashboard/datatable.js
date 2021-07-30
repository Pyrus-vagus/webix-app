// second column of the 2nd row (datatable with films list)
import { movieListID } from "../../variables.js";
export const movieList = {
  view: "datatable",
  columns:[
    {id: "rank", header: [{text: "", rowspan: 2}],  width:50},
    {id: "title", header: ["Film Title", {content: "textFilter"}], width: 200, fillspace: true, sort:"string"},
    {id: "year", header: ["Realesed", {content: "textFilter"}]},
    {id: "votes", header: ["Votes", {content: "textFilter"}]},
    {id: "rating", header:["Rating", {content: "textFilter"}]}
  ],
  url: "components/main/dashboard/data/data.js",
  gravity: 2.5,
  scrollX: false,
  select: true,
  id: movieListID,
  
};