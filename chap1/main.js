const red = document.querySelector(".red");
const scrollBy = document.querySelector(".scroll_by");
const scrollTo = document.querySelector(".scroll_to");
const scrollInto = document.querySelector(".scroll_into");

function coordinates(event) {
  const rect = red.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
}


red.addEventListener("click", coordinates);

scrollBy.addEventListener("click", (event) => {
  window.scrollBy(0,100);
});

scrollTo.addEventListener("click", (event) => {
  window.scrollTo(0,100);
});

scrollInto.addEventListener("click", (event) => {
  red.scrollIntoView();
});