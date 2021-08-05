import { user_chart } from "../../variables.js"

export const userChart ={
  view:"chart",
  id: user_chart,
  type:"bar",
  value:"#age#",
  radius:0,
  barWidth:40,
  
  yAxis:{
    start: 0,
    end: 10,
    step: 2,
    lines: false
  },
  xAxis:{
    title:"Country",
    template:"#country#", 
  },
  padding:{
    left:30,
    right:10,
    top:50,
  },
}