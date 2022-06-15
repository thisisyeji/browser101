const listForm = document.querySelector("#list_form");
const list = document.querySelector("#list");
const inputText = document.querySelector("#input_text");
const title = document.querySelector(".title");
const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `
  ${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()} </br>
  ${hours} : ${minutes} : ${seconds}
  `; 
};

getClock();
setInterval(getClock, 1000);


function onAdd() {
  const li = document.createElement("li")
  li.setAttribute('class', 'list_item')

  const span = document.createElement("span")
  span.addEventListener("click", lineDone);
  span.textContent = inputText.value;

  const button = document.createElement("button");
  button.setAttribute('class', 'delete_btn')
  button.innerHTML = '<i class="fa-solid fa-minus"></i>'
  button.addEventListener("click", deleteToDo);

  list.append(li)
  li.appendChild(span)
  li.appendChild(button);

  span.scrollIntoView({ block: 'center' });

  inputText.value = "";
  inputText.focus();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function lineDone(event) {
  const span = event.target
  span.classList.toggle("line_through")
}

listForm.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});



