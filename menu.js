const menu=document.getElementById("menu");
const aside=document.querySelector("aside");
function onClickMenu(){
aside.classList.toggle("open");
}
menu.addEventListener("click",onClickMenu);

