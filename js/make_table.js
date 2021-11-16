function delete_undefined(data){
  if (!data) {
    return "" ;
  }
  if (data) {
    return data ;
  }
}

function make_table(){

  const calendar_heaad=document.getElementById("calender_week");
  const calendar=document.getElementById("calender_date");
  calendar_heaad.innerHTML="";
  calendar.innerHTML="";
  let week_hold=new Array;
  let tr_fragment=document.createDocumentFragment();
  for (let i = 0; i < date_data.length; i++) {
    
    let tr_ele=document.createElement("tr");
    //fragmentで高速化
    let td_fragment = document.createDocumentFragment();
    for(let j=0;j<date_data[i].length;j++){

      let td_ele=document.createElement("td");
      if (i==0) {
        week_hold.push(date_data[i][j]);
      }
      // console.log(week_hold);
      td_ele.innerHTML=pluszero(date_data[i][j]);
      td_ele.dataset.date=date_data[i][j]; //カスタムデータ設定
      td_ele.dataset.row=i;
      td_ele.dataset.col=j;
      if (i!=0) {
        td_ele.dataset.week=week_hold[j];
      }
      if (j==6) {
        td_ele.classList.add("saturday");
      }
      if (j==0) {
        td_ele.classList.add("sunday");
      }
      const ny=document.getElementById("year_select").value;
      const nm=document.getElementById("month_select").value;
      if (date_data[i][j]==new Date().getDate() && ny==new Date().getFullYear() && nm==new Date().getMonth()+1) {
        td_ele.classList.add("today");
        td_ele.innerHTML="<span>"+pluszero(date_data[i][j])+"</span>";
      }
      td_ele.addEventListener("click",function () {
        get_customdata(this);
      })
      // tr_ele.appendChild(td_ele);
      td_fragment.appendChild(td_ele);
    }
      tr_ele.appendChild(td_fragment);
      tr_fragment.appendChild(tr_ele);

      if (i==0) {
        calendar_heaad.appendChild(tr_fragment);
      }else{
        calendar.appendChild(tr_fragment);
      }
  }

}

function get_customdata(ele) { //customデータを取得
  console.log(ele);
  console.log(ele.dataset.date);
  console.log(ele.dataset.row);
  console.log(ele.dataset.col);
}