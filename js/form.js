let fondosRecetas = document.querySelector("body");
let darkmode = document.querySelector("#darkmode");


darkmode.addEventListener ("click", function(){
    fondosRecetas.classList.toggle("nightMode");
})