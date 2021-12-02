function check_calendar(ele){
    //||パイプが打てないことが判明した
    //||
    // console.log(true || false);
    if ($(ele).data("date")!="　"&&$(ele).data("week")) {
        $(ele).toggleClass("check");
    }
}