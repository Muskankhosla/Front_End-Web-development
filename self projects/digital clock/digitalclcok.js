function timer() {
    var date = new Date();
    var hr=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var amPm="AM";
    if(hr>12){
        hr-=12;
        amPm="PM"

    }
    if(hr==0){
        hr=12;
        amPm="AM";
    }
    hr=(hr<10)?"0"+hr:hr;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    var time= hr +":"+ m  +":"+ s +" "+ amPm;
    document.getElementById("clock").innerText=time;
    setTimeout(timer,1000);

}
timer();