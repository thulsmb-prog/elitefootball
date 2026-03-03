function toggleMenu(){
let menu=document.getElementById("nav-menu");
if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}
}

function searchSite(){

let input = document.getElementById("searchInput").value.toLowerCase();

if(input.includes("real madrid")){
window.location.href = "article.html";
}

else if(input.includes("fixtures") || input.includes("prediction")){
window.location.href = "fixtures.html";
}

else if(input.includes("about")){
window.location.href = "about.html";
}

else if(input.includes("contact")){
window.location.href = "contact.html";
}

else{
alert("No results found.");
}

}
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("searchInput").addEventListener("keypress", function(event){
if(event.key === "Enter"){
searchSite();
}
});
});