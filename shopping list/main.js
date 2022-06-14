const listForm = document.querySelector("#list_form");
const list = document.querySelector("#list");
const inputText = document.querySelector("#input_text");
const title = document.querySelector(".title");

const date = new Date();
const today = `
${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()} 
`; 
title.append(today);


function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function lineDone(event) {
  const span = event.target
  span.classList.toggle("line_through")
}

listForm.addEventListener("submit", () => {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const button = document.createElement("button");
  button.textContent = "X";

  list.append(li)
  li.setAttribute('class', 'list_item')
  li.appendChild(span)
  span.textContent = inputText.value;
  li.appendChild(button);
  button.setAttribute('class', 'delete_btn')
  button.addEventListener("click", deleteToDo);
  span.addEventListener("click", lineDone);

  inputText.value = "";
})



