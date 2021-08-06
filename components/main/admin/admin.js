import { admin_table, admin_form, options } from "../../variables.js";
const adminForm = {
    view: "form",
      id: admin_form,
      elements:[
        { type: "section", template: "Film Category" },
        {cols:[
          {name: "value", view: "text", gravity: 8},
          { 
            view: "button",
            value: "Save",
            css: "add_btn",
            click: saveForm,       
          },
          { 
            view: "button",
            value: "Clear",
            css: "add_btn",
            click: cleanForm,              
          },
        ]}
      ],
      rules:{
          value: webix.rules.isNotEmpty,
      }
  }
export const adminCell = {
  rows:[
    adminForm,
    {
      view: "datatable",
      id: admin_table,
      select: true,
      header: false,
      columns: [
        {id: "value", fillspace: true},
        {template: "{common.trashIcon()}"},
      ],
      onClick:{
        "wxi-trash": function(e,id){
              options.remove(id);
              return false;
        }
      }  
    },
  ], 
};
function saveForm(){
    const form = $$(admin_form);
    if(form.isDirty()){
      if(!form.validate())
        return false;
    const newData = form.getValues();
    newData.id ? options.updateItem(newData.id, newData): options.add(newData); 
    //  form.save();   
    webix.message("Information is updated!");
    cleanForm();
    }
  }  
  
  function cleanForm(){
    $$(admin_form).clear();
    $$(admin_form).clearValidation();
    $$(admin_table).unselect();
  }