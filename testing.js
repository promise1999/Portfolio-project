function main(){
    hambtn= document.getElementById("hamburger")
    hambtn.addEventListener("click", showsidebar)

    exitbtn= document.getElementById("exitbtn")
    exitbtn.addEventListener("click", delect)
}

function showsidebar(){
    sidenav = document.querySelector(".sidenav");
    sidenav.style.width = "380px";

}
 function delect(){
    sidenav = document.querySelector(".sidenav");
    sidenav.style.width = "0px";
  
 }
window.addEventListener("load", main)



