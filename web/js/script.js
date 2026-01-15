let ourallcatg = document.querySelector(".ourallcatg")
let categorymenu = document.querySelector(".categorymenu")
let categorymenuclosebtn = document.querySelector(".categorymenuclosebtn");

ourallcatg.addEventListener("click", ()=>{
    categorymenu.style.left="0"; 
    document.body.style.overflow="hidden";
})

categorymenuclosebtn.addEventListener("click",()=>{
    categorymenu.style.left="-350px";
     document.body.style.overflow="auto"; 
})

let openmenu =document.querySelector(".openmenu");
let menu = document.querySelector(".menu")
let menuclosebtn =document.querySelector(".menuclosebtn")


openmenu.addEventListener("click",()=>{
    menu.style.top="0";
     document.body.style.overflow="hidden";
})
menuclosebtn.addEventListener("click",()=>{
    menu.style.top="-350px";
     document.body.style.overflow="auto";
})