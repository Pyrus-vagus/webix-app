export const productTree = {       
  view:"treetable",
  columns:[
    {id: "id", header: "", width: 50},
    {id: "title", header: "Title", fillspace: true,
      template: "{common.treetable()} #title#",
      editor: "text",  
    },
    {id:"price", header: "Price",editor: "text",},
    ],
  editable:true,
  editaction: "click",
  select: "cell",
  url: "components/main/products/data/products.js",   
  ready:function(){
    this.openAll();
  },
}