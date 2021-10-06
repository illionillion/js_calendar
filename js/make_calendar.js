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

      if (j<week && i==1) {//1週目の1日目が始まるまでの曜日
        week_list[j]="　";
      }
      if(j>=week || i>1){
        if (day<=nde.getDate()) {
          week_list[j]=day;
          // console.log(day);
          day++;
          // console.log(end_month_day.getDate());
        }else{
          day++;//ここでもインクリメントさせる
        }
      }
      // console.log(j);
      // console.log(nde.getDay());
      // console.log(i);
      // console.log(day);
      // console.log(nde.getDate());
      if(day>nde.getDate()+1) {
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