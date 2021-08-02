import { movieList } from "./dashboard/datatable.js";
import { form } from "./dashboard/form.js";
import { userList } from "./users/usersList.js"
export const main = {
  cells: [ 
    {id: "Dashboard", cols:[movieList, form]},
    {id: "Users", rows:[userList]},
    {id: "Products", template: "Products View"},
    {id: "Locations", template: "Locations View"}
  ],
  gravity: 10,
};