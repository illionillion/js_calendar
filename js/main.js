'use strict';
// console.log("ok");

let date_data=[
  ["日","月","火","水","木","金","土"]
]

//来月取得
function next_month() {
  const ele_y=document.getElementById("year_select");
  let now_y=ele_y.value;
  const ele_m=document.getElementById("month_select");
  let now_m=ele_m.value;
  console.log(Number(now_m)+1);
  now_m=Number(now_m)+1
  if (now_m>12) {
    now_m=1;
    now_y++;
    if (getOptionElement(ele_y,now_y)!=null) {
        ele_y.selectedIndex=getOptionElement(ele_y,now_y);
    }else{
      return;
    }
  }
  console.log(getOptionElement(ele_m,now_m));
  ele_m.selectedIndex=getOptionElement(ele_m,now_m);
  get_day();
  make_table();
}
//先月取得
function last_month() {
  const ele_y=document.getElementById("year_select");
  let now_y=ele_y.value;
  const ele_m=document.getElementById("month_select");
  let now_m=ele_m.value;
  console.log(Number(now_m)-1);
  now_m=Number(now_m)-1
  if (now_m<1) {
    now_m=12;
    now_y--;
    if (getOptionElement(ele_y,now_y)!=null) {
        ele_y.selectedIndex=getOptionElement(ele_y,now_y);
    }else{
      return;
    }
  }
  console.log(getOptionElement(ele_m,now_m));
  ele_m.selectedIndex=getOptionElement(ele_m,now_m);
  get_day();
  make_table();
}

//selectタグのvalueからindexを取得するプログラム
function getOptionElement(select_tag , value){
  for(let i=0; i<select_tag.options.length; i++){
    // console.log(select_tag.options[i].value+"=="+value+":"+i);
    if(select_tag.options[i].value == value){return Number(i);}
  }
  return null;
}
$(window).on("load",function(){
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
  document.getElementById("last").addEventListener("click",function () {
    last_month();
  })
  document.getElementById("next").addEventListener("click",function () {
    next_month();
  })
  $("#ss_btn").click(function(){ take_ss(); })  
})