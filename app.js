"use strict";
window.addEventListener("load", initApp);
const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");
function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
  window.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      console.log("ENTER HAS BEEN HIT");
      addToDo();
    }
  });
}
function addToDo() {
  if (newToDo.value == "") {
    warning();
  } else {
    const myHTML = /*html*/ `
            <li>
                <span>${newToDo.value}</span>
                <button class = btn-delete>Delete</button>
                <button class = btn-update>Update</button>
            </li>
        `;
    list.insertAdjacentHTML("beforeend", myHTML);

    list
      .querySelector("li:last-child button.btn-update")
      .addEventListener("click", updateToDo);

    list
      .querySelector("li:last-child button.btn-delete")
      .addEventListener("click", removeToDo);
    newToDo.value = "";
  }
}
function removeToDo() {
  this.parentNode.remove();
}
function updateToDo() {
  const parent = this.parentNode;
  if (newToDo.value != "") {
    document.querySelector("li:last-child span").textContent = newToDo.value;
    newToDo.value = "";
  }
}
function warning() {
  newToDo.placeholder = "This field needs text!";
  newToDo.classList.add("warning");
  setTimeout(removeWarning, 1000);
}
function removeWarning() {
  newToDo.placeholder = "Enter a new item";
  newToDo.classList.remove("warning");
}
