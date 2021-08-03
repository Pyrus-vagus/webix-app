export const userChart ={
    view:"chart",
  type:"bar",
  value:"#age#",
  radius:0,
  barWidth:40,
  
  yAxis:{
    template:"",
    lines: false
  },
  xAxis:{
    title:"Age",
    template:"#age#",  
  },
  padding:{
    left:10,
    right:10,
    top:50,
  },
  url: "components/main/users/data/users.js",

}