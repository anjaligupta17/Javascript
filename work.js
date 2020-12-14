//Selecting using query
// sel = document.querySelectorAll(".container");
// console.log(sel);
//JAVASCRIPT EVENTS
function clicked() {
 document.querySelectorAll('.container')[1].innerHTML='<b>anjiiii</b>'    console.log("the button is clicked");
}
window.onload = function () {
  console.log("the document is loaded");
};
firstcontainer.addEventListener("click", function () {
  console.log("click karo");
});
firstcontainer.addEventListener('mouseover',function(){
    console.log('mouse touch touch1')
})
//Arrow function
function summ(a,b){
    return a+b;
}
summ=(a,b)=>{
    return a+b;
}
lock=()=>
{ document.querySelectorAll('.container')[1].innerHTML="<b>set it broda</b>"
console.log('log it bitch')
}
//SET TIMEOUT
// use clearinterval/cleartimeout to cancel setinterval/settimeout 
clr=setTimeout(lock,200)