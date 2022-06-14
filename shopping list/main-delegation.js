const listForm = document.querySelector("#list_form");
const list = document.querySelector("#list");
const inputText = document.querySelector("#input_text");
const title = document.querySelector(".title");

const date = new Date();
const today = `
${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()} 
`; 
title.append(today);


function onAdd() {
  const text = inputText.value;
  if(text === '') {
    inputText.focus();
    return;
  }
  const item = createItem(text);
  list.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  inputText.value = "";
  inputText.focus();
}

let id = 0; // UUID
function createItem(text) {
  const li = document.createElement("li");
  li.setAttribute('class', 'list_item');
  li.setAttribute('data-id', id);
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete_btn">
      <i class="fa-solid fa-minus" data-id=${id}></i>
    </button>`;
  id++;
  return li;
}


function lineDone(event) {
  const span = event.target;
  span.classList.toggle("line_through");
}

listForm.addEventListener("submit", onAdd);

list.addEventListener("click", event => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.list_item[data-id="${id}"]`);
    toBeDeleted.remove();
  }
  const tagName = event.target.tagName;
  if (tagName === "SPAN") {
    event.target.addEventListener("click", lineDone);
  }
});




