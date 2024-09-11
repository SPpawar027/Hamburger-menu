const headcontainer = document.querySelector(".head-container");
const halfcircle = document.querySelector(".halfcircle");
const cross = document.querySelector(".cross");
const maincontent = document.querySelector(".main-content")
const goto = document.querySelector(".goto");
const nav = document.querySelector("nav")

halfcircle.addEventListener("click" ,(e)=>{
    headcontainer.classList.add("open-menu");
    e.stopPropagation();   

})
nav.addEventListener("click" ,(e)=>{
    e.stopPropagation();
    // headcontainer.classList.add("open-menu");

})
cross.addEventListener("click" , ()=>{
    headcontainer.classList.remove("open-menu")
})

goto.addEventListener("click",()=>{
    maincontent.scrollTo(0,0)

})
window.addEventListener("click",(e)=>{
    // e.stopPropagation()
    headcontainer.classList.remove("open-menu")
})

// maincontent.addEventListener("click" , (e)=>{
//     headcontainer.classList.remove("open-menu") 
    

// })