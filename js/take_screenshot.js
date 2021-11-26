//スクリーンショット
function take_ss(){

    // html2canvas($("#frame")[0]).then(canvas => {
    html2canvas($("#calender")[0]).then(canvas => {
  
        const imgData = canvas.toDataURL();
        const downloadtag=document.createElement("a");
        // document.body.appendChild(downloadtag); //appendChildする必要あるのか？
        downloadtag.download="カレンダー";
        downloadtag.href=imgData;
        downloadtag.click();
        // downloadtag.remove();
    
    });
  
  }