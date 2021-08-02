import { userListID, list_input } from "../../variables.js";
export const userList = {
  rows:[
    {
      view: "text", id: list_input
    },
    {
      view: "list",
      id: userListID,
      select: true,
      url: "components/main/users/data/users.js",
      template: "#name# from #country#",
      fillspace: true,   
    }
  ]
};