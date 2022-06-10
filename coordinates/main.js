// 내 코드

// const coordinates = document.querySelector(".coordinates");
// const horizontal = document.querySelector(".horizontal");
// const vertical = document.querySelector(".vertical");


// function move(event) {
//   const x = event.clientX;
//   const y = event.clientY;
  
//   coordinates.innerText = `${x}px, ${y}px`
//   coordinates.style.left = `${x + 20}px`;
//   coordinates.style.top = `${y + 20}px`;

//   horizontal.style.top = `${y}px`;
//   vertical.style.left = `${x}px`;
// }

// window.addEventListener("mousemove", move);


const coordinates = document.querySelector(".coordinates");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");

function move(event) {
  const x = event.clientX;
  const y = event.clientY;
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.innerText = `${x}px, ${y}px`;
}

document.addEventListener("mousemove", move);