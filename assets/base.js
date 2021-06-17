var para = document.querySelector("p");
para.addEventListener("click", updateName);

function updateName(){
    name = prompt("Say Your Name.");
    para.textContent = "Player1 = " + name;
}