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
      td_ele.innerHTML=delete_undefined(date_data[i][j]);
      tr_ele.appendChild(td_ele);

    }
    
  }

}