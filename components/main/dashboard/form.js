import { formID, movieListID } from "../../variables.js";
const currYear = new Date().getFullYear();
const formLabels = [
  {name: "Title", invMes: "Can't be empty"}, 
  {name: "Year", invMes: `Enter a year between 1970 and ${currYear}`},
  {name: "Rating", invMes:"Should be more than 0"}, 
  {name: "Votes", invMes:"Can't be more than 100000"}, 
];  
const formElements = formLabels.map((el) => {
  const input = {
    view: "text",
    label: el.name,
    value: "",
    name: el.name.toLowerCase(),
    invalidMessage: el.invMes
    };

    if (el.name === "Year") {
    // Object.assign or webix.extend({ target }, { source }, true)
      Object.assign(input, {
      view: "datepicker",
      type: "year",
      format: "%Y",
    });
  } 
  return input 
});
// third column of the 2nd row(form)
export const form = {
  type: "clean",
  rows: [
    {
      view: "form",
      id: formID,
      elements: [
        { type: "section", template: "edit films" },
        ...formElements,
        {
          margin: 5,
          cols: [
            {
              view: "button",
              value: "Add new",
              css: "add_btn",
              click: addItem,
            },
            {
              view: "button",
              value: "Clear",
              click: function () {
                webix.confirm({
                  title: "Do you want to clear the form?"
                }).then(
                  function(){
                    $$(formID).clear();
                    $$(formID).clearValidation();
                  },
                  function(){
                    webix.message('Rejected');
                  }
                );             
              },
            },
          ],
        },
      ],
      // rules for input validation
      rules: {
        rating: function(value){
          return webix.rules.isNotEmpty(value) && webix.rules.isNumber(value) && parseFloat(value)!==0 },
        votes: function(value){
          return webix.rules.isNumber(value) && value < 100000},
        title: webix.rules.isNotEmpty,
        year: function(value){
          return webix.rules.isNotEmpty(value) && value.getFullYear()>=1970 && value.getFullYear()<= currYear;
        }
        },
    },
    {},
  ],
};
// executed when "Add new" button is clicked: add new film to the film list
function addItem() {
  const form = $$(formID);
  const list = $$(movieListID);
  const newData = form.getValues();
  if(newData.id){
    newData.year = newData.year.getFullYear();
    list.updateItem(newData.id, newData);
    webix.message("Information is updated!");
    form.clear();
  } else if (form.validate()) {
    newData.year = newData.year.getFullYear();
    newData.rank = "#";
    list.add(newData);
    webix.message("All is correct");
    form.clear();
    }
    
}