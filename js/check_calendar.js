function check_calendar(ele){
    //||パイプが打てないことが判明した
    //||
    // console.log(true || false);
    if ($(ele).data("date")!="　"&&$(ele).data("week")) {
        $(ele).toggleClass("check");
        // console.log($(ele).data("year")+"-"+$(ele).data("month")+"-"+$(ele).data("date"));
        if (check_memory.indexOf(call_check_date(ele))==-1) {
            check_memory.push(call_check_date(ele));
        }else{
            // check_memory.pop(call_check_date(ele));
            check_memory=check_memory.filter((x)=>{return x!=call_check_date(ele);});
        }
        console.log(check_memory);
    }
}

function call_check_date(ele) {

    return $(ele).data("year")+"-"+$(ele).data("month")+"-"+$(ele).data("date");
}