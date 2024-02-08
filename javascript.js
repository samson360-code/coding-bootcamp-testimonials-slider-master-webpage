var prev=document.getElementById("prev");
var next=document.getElementById("next");
var slideOne=document.getElementsByClassName("one");
var slideTwo=document.getElementsByClassName("two");
  console.log(typeof(slideOne));
prev.addEventListener("click",()=>{
    prev.style.opacity="0.3";
    next.style.opacity="1";
    Array.from(slideOne).forEach(element => {
        element.style.display="block";
        
    });
    Array.from(slideTwo).forEach(element => {
        element.style.display="none";
        
    });
})
next.addEventListener("click",()=>{
    prev.style.opacity="1";
    next.style.opacity="0.3";
    Array.from(slideTwo).forEach(element => {
        element.style.display="block";
        
    });
    Array.from(slideOne).forEach(element => {
        element.style.display="none";
        
    });
})
