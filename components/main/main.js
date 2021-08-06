import { movieList } from "./dashboard/datatable.js";
import { form } from "./dashboard/form.js";
import { userList } from "./users/usersList.js"
import { userChart } from "./users/userChart.js";
import { productTree } from "./products/productsTree.js";
import { adminCell } from "./admin/admin.js";

export const main = {
  cells: [ 
    {id: "Dashboard", cols:[ movieList, form]},
    {id: "Users", rows:[userList, userChart]},
    {id: "Products", rows: [productTree]},
    {id: "Admin", rows: [adminCell]},
  ],
  gravity: 10,
};