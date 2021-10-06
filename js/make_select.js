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
