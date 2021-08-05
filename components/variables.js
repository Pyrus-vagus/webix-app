 //create consts for object IDs
export const currYear = new Date().getFullYear();
export const film_list = "film_list";
export const film_form = "film_form";
export const side_list = "side_list";
export const user_list = "user_list";
export const list_input="list_input";
export const admin_table = "admin_table";
export const admin_form = "admin_form";
export const popup = "popup";
export const selector = "selector";
export const user_chart = "user_chart"
export const countries = new webix.DataCollection({ url:"./components/main/users/data/countries.js" });
export const options = new webix.DataCollection({ url:"components/main/dashboard/data/categories.js" });
export const userCollection = new webix.DataCollection({ url: "components/main/users/data/users.js" });