function delete_undefined(data){
  if (!data) {
    return "" ;
  }
  if (data) {
    return data ;
  }
}

function make_table(){

  const calendar=document.getElementById("calender_date");
  calendar.innerHTML="";
  for (let i = 0; i < date_data.length; i++) {
    
    let tr_ele=document.createElement("tr");
    calendar.appendChild(tr_ele);

    for(let j=0;j<date_data[i].length;j++){

      let td_ele=document.createElement("td");
      td_ele.innerHTML=pluszero(date_data[i][j]);
      // td_ele.setAttribute("data-date",date_data[i][j]);
      td_ele.dataset.date=date_data[i][j]; //カスタムデータ設定
      // td_ele.setAttribute("data-row",i);
      td_ele.dataset.row=i;
      // td_ele.setAttribute("data-col",j);
      td_ele.dataset.col=j;
      td_ele.addEventListener("click",function () {
        get_customdata(this);
      })
      tr_ele.appendChild(td_ele);

    }
    
  }

}

function get_customdata(ele) { //customデータを取得
  console.log(ele);
  console.log(ele.dataset.date);
  console.log(ele.dataset.row);
  console.log(ele.dataset.col);
}