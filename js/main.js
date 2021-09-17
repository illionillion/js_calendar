'use strict';
console.log("ok");

let date_data=[
  ["日","月","火","水","木","金","土"]
]

function get_date(m){


  //今日の日付データ
  let now_date=new Date();
  now_date.setDate(1);//月初
  
  if (m) {
    //今日の日付データ
    now_date=new Date(now_date.getFullYear(),m-1);
    now_date.setDate(1);//月初
  }
  // console.log(new Date(now_date.getFullYear(),now_date.getMonth()));
  
  let end_month_day=new Date(now_date.getFullYear(), now_date.getMonth() + 1, 0);//月末

  //年・月・日・曜日を取得する
  let year = now_date.getFullYear();
  let month = now_date.getMonth()+1;
  let week = now_date.getDay();
  let day = now_date.getDate();

  console.log("西暦"+year+"年"+month+"月"+day+"日 "+date_data[0][week]+"曜日");
  console.log(day);

  for (let i = 1; i < 7; i++) {
    
    let week_list=[];
    for (let j = 0; j < 7; j++) {

      if (j<week && i==1) {
        week_list[j]="　";
      }
      if(j>=week || i>1){
        if (day<=end_month_day.getDate()) {
          week_list[j]=day;
          console.log(day);
          day++;
          // console.log(end_month_day.getDate());
        }
      }
      if(j>end_month_day.getDay() && i==6) {
        week_list[j]="　";
      }
      // if (i<6) {
        
      // }
    }
    date_data[i]=week_list;
  }
  console.table(date_data);
  console.log(date_data);

  document.getElementById("month").innerHTML=month+"月";
  document.getElementById("last").setAttribute("month_data",now_date.getMonth());
  document.getElementById("last").onclick=function(){
    console.log(now_date.getMonth());//0の場合今月に戻る
    get_date(now_date.getMonth());make_calendar();
  };
  document.getElementById("next").setAttribute("month_data",now_date.getMonth()+2);
  document.getElementById("next").onclick=function(){
    console.log(now_date.getMonth()+2);
    get_date(now_date.getMonth()+2);make_calendar();
  };


}

function make_calendar(){

  const calendar=document.getElementById("calender_date");
  calendar.innerHTML="";
  for (let i = 0; i < date_data.length; i++) {
    
    let tr_ele=document.createElement("tr");
    calendar.appendChild(tr_ele);

    for(let j=0;j<date_data[i].length;j++){

      let td_ele=document.createElement("td");
      td_ele.innerHTML=date_data[i][j];
      tr_ele.appendChild(td_ele);

    }
    
  }

}

window.onload=function(){
  get_date();
  make_calendar();
}