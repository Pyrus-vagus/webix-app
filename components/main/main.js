import { movieList } from "./dashboard/datatable.js";
import { form } from "./dashboard/form.js";
import { userList } from "./users/usersList.js"
import { userChart } from "./users/userChart.js";
import { productTree } from "./products/productsTree.js";
export const main = {
  cells: [ 
    {id: "Dashboard", cols:[ movieList, form]},
    {id: "Users", rows:[userList, userChart]},
    {id: "Products", rows: [productTree]},
    {id: "Locations", template: "Locations View"}
  ],
  gravity: 10,
};