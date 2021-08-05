import { film_form, film_list, currYear, options, filmCollection } from "../../variables.js";
const formLabels = [
  {name: "Title", invMes: "Can't be empty"}, 
  {name: "Year", invMes: `Enter a year between 1970 and ${currYear}`},
  {name: "Rating", invMes:"Should be more than 0"}, 
  {name: "Votes", invMes:"Should be a number"}, 
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
      id: film_form,
      elements: [
        { type: "section", template: "edit films" },
        ...formElements,
        {name: "categoryId", value: "", view: "richselect", label: "Category", options: options, },
        {
          margin: 5,
          cols: [
            {
              view: "button",
              value: "Save",
              css: "add_btn",
              click: saveForm,
            },
            {
              view: "button",
              value: "Clear",
              click: function () {
                webix.confirm({
                  title: "Do you want to clear the form?"
                }).then(
                  function(){
                    cleanForm();
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
          return webix.rules.isNotEmpty(value) && webix.rules.isNumber(value) && parseFloat(value)!==0},
        votes: function(value){
          return webix.rules.isNotEmpty && webix.rules.isNumber(value)},
        title: webix.rules.isNotEmpty,
        year: function(value){
          return webix.rules.isNotEmpty(value) && value.getFullYear()<= currYear;
        }
        },
    },
    {},
  ],
};
// executed when "Add new" button is clicked: add new film to the film list
function saveForm(){
  const form = $$(film_form);
  if(form.isDirty()){
    if(!form.validate())
      return false;
    const newData = form.getValues();
    newData.year = newData.year.getFullYear();
    newData.rank = newData.id?newData.rank:"#";
    newData.id ? filmCollection.updateItem(newData.id, newData): filmCollection.add(newData);
    webix.message("Information is updated!");
    cleanForm();
  }
}  

function cleanForm(){
  $$(film_form).clear();
  $$(film_form).clearValidation();
  $$(film_list).unselect();
}