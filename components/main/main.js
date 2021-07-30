import { movieList } from "./dashboard/datatable.js";
import { form } from "./dashboard/form.js";
export const main = {
  cells: [ 
    {id: "Dashboard", cols:[movieList, form]},
    {id: "Users", template: "Users View"},
    {id: "Products", template: "Products View"},
    {id: "Locations", template: "Locations View"}
  ],
  gravity: 10,
};