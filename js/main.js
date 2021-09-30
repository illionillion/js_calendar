'use strict';
console.log("ok");

let date_data=[
  ["日","月","火","水","木","金","土"]
]

function make_year_select() {
  console.log(new Date().getFullYear());
  console.log(new Date().getMonth()+1);

  const ny=new Date().getFullYear();
  const nm=new Date().getMonth()+1;
  // console.log(nm);
  // document.getElementById("month_select").value=ny+"-"+nm;

  //過去10年
  for (let i = 10; i >= 1; i--) {
    // console.log(i);
    const y_ele_p=document.createElement("option");
    y_ele_p.value=ny-i;
    y_ele_p.innerHTML=ny-i;
    document.getElementById("year_select").appendChild(y_ele_p);
    
  }

  const y_ele=document.createElement("option");
  y_ele.value=ny;
  y_ele.innerHTML=ny;
  y_ele.selected=true;
  document.getElementById("year_select").appendChild(y_ele);

  //未来10年
  for (let i = 1; i <= 10; i++) {

    const y_ele_f=document.createElement("option");
    y_ele_f.value=ny+i;
    y_ele_f.innerHTML=ny+i;
    document.getElementById("year_select").appendChild(y_ele_f);
    
  }

  //月
  for (let i = 1; i <= 12; i++) {
    const m_ele=document.createElement("option");
    m_ele.value=i;
    m_ele.innerHTML=i;
    if (i===nm) {
      m_ele.selected=true;
    }
    document.getElementById("month_select").appendChild(m_ele);
  }
}

function get_day(){
  const ny=document.getElementById("year_select").value;
  const nm=document.getElementById("month_select").value;
  let nds=new Date(ny,nm-1);//初日
  nds.setDate(1)
  console.log(nds);

  let nde=new Date(ny,nm,0);//月末
  console.log(nde);

  //年・月・日・曜日を取得する
  let year = nds.getFullYear();
  let month = nds.getMonth()+1;
  let week = nds.getDay();
  let day = nds.getDate();

  console.log("西暦"+year+"年"+month+"月"+day+"日 "+date_data[0][week]+"曜日");
  console.log(day);

  for (let i = 1; i < 7; i++) {
    
    let week_list=[];
    for (let j = 0; j < 7; j++) {

      if (j<week && i==1) {
        week_list[j]="　";
      }
      if(j>=week || i>1){
        if (day<=nde.getDate()) {
          week_list[j]=day;
          // console.log(day);
          day++;
          // console.log(end_month_day.getDate());
        }
      }
      if(j>nde.getDay() && i==6) {
        week_list[j]="　";
      }
      // if (i<6) {
        
      // }
    }
    // console.log(week_list);
    date_data[i]=week_list;
    
  }
  console.table(date_data);
  console.log(date_data);

  document.getElementById("month").innerHTML=month+"月";
}

function delete_undefined(data){
  if (!data) {
    return "" ;
  }
  if (data) {
    return data ;
  }
}

function make_calendar(){

  const calendar=document.getElementById("calender_date");
  calendar.innerHTML="";
  for (let i = 0; i < date_data.length; i++) {
    
    let tr_ele=document.createElement("tr");
    calendar.appendChild(tr_ele);

    for(let j=0;j<date_data[i].length;j++){

      let td_ele=document.createElement("td");
      td_ele.innerHTML=delete_undefined(date_data[i][j]);
      tr_ele.appendChild(td_ele);

    }
    
  }

}

window.onload=function(){
  make_year_select();
  get_day();
  make_calendar();
  document.getElementById("year_select").addEventListener("change",function () {
    get_day();
    make_calendar();
  })
  document.getElementById("month_select").addEventListener("change",function () {
    get_day();
    make_calendar();
  })
}