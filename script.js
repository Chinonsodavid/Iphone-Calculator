let display=document.getElementById("screen") ;
function allclear(){
    display.value= "";
}
// function clear(){
    
// }
function show(n){
    display.value+=n;
}

function calc(){
    display.value = eval (display.value);
}