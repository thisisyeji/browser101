const listForm = document.querySelector("#list_form");
const list = document.querySelector("#list");
const inputText = document.querySelector("#input_text");
const inputValue = inputText.value;

listForm.addEventListener("submit", () => {
  list.innerHTML = `
  <li class="list_item">
  <input type="checkbox" class="checkbox">
  ${inputValue}
  <i class="fa-regular fa-square-minus"></i>
  </li>
  `
})

