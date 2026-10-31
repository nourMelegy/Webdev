const title = document.getElementById("title");
const inputofname= document.getElementById("name");
const greetingbutton=document.getElementById("greet");
const list = document.getElementById("list");
greetingbutton.addEventListener("click", function () {
    const name = inputofname.value.trim();
    if (name === "") {
    alert("Please enter your name!");
    return;
}
title.textContent = `Hello, ${name}!`;
const li = document.createElement("li");
li.textContent = name;
li.addEventListener("click", function () {
    title.textContent = `Goodbye, ${name}!`;
    li.remove();
});
list.appendChild(li);
inputofname.value = "";
});