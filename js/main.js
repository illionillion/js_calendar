'use strict';
// console.log("ok");

let date_data=[
  ["日","月","火","水","木","金","土"]
]

function next_month() {
  let now_m=document.getElementById("month_select").value;
  console.log(Number(now_m)+1);
  document.getElementById("month_select").querySelector("option[value='"+now_m+"']").setAttribute("selected", "");
  now_m=Number(now_m)+1
  // document.getElementById("month_select").options[now_m].selected=true;
  document.getElementById("month_select").querySelector("option[value='"+now_m+"']").setAttribute("selected", "selected");
}

function last_month() {
  let now_m=document.getElementById("month_select").value;
  console.log(Number(now_m)-1);
  // document.getElementById("month_select").options[now_m].selected=false;
  document.getElementById("month_select").querySelector("option[value='"+now_m+"']").setAttribute("selected", "");
  now_m=Number(now_m)-1;
  // document.getElementById("month_select").options[now_m].selected=true;
  document.getElementById("month_select").querySelector("option[value='"+now_m+"']").setAttribute("selected", "selected");
}

window.onload=function(){

  make_year_select();
  get_day();
  make_table();
  document.getElementById("year_select").addEventListener("change",function () {
    get_day();
    make_table();
  })
  document.getElementById("month_select").addEventListener("change",function () {
    get_day();
    make_table();
  })
  // document.getElementById("last").addEventListener("click",function () {
  //   last_month();
  // })
  // document.getElementById("next").addEventListener("click",function () {
  //   next_month();
  // })

}