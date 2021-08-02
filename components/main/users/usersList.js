import { userListID } from "../../variables.js";
export const userList = {
  view: "list",
  id: userListID,
  select: true,
  url: "components/main/users/data/users.js",
  template: "#name# from #country#",
  fillspace: true,   
};