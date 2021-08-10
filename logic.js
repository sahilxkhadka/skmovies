const toggleNav=document.getElementsByClassName("hamburger-lines");
const navBlock=document.getElementById("malmasala");
toggleNav[0].addEventListener("click",()=>{
        navBlock.classList.toggle("toggle")   
})