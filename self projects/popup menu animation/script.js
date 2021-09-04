var menu=document.getElementById('menu');
var menu=document.getElementById('menu');
var abc=0;
function expand(){
    if(abc==0){
        menu.style.transform="scale(3)";
        plus.style.transform="rotate(360deg)";
        abc=1;
    }
    else{
        menu.style.transform="scale(0)";
        plus.style.transform="rotate(0deg)";
        abc=0;
    }
}