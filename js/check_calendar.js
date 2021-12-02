function check_calendar(ele){
    //||パイプが打てないことが判明した
    if ($(ele).data("date")!="　"&&$(ele).data("week")) {
        $(ele).toggleClass("check");
    }
}