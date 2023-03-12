document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Patrick is the champion";

document.body.appendChild(newHeader);
