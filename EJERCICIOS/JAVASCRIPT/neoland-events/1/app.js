const myBtn = document.querySelector("#btnToClick");

myBtn.addEventListener("click", (event) => {
  console.log(event);
});


const myinput1 = document.querySelector(".focus");

myinput1.addEventListener("focus", (ev) => 
  console.log(ev.target.value)
);


const myinput2 = document.querySelector(".value");

myinput2.addEventListener("input", (ev) => 
  console.log(ev.target.value)
);
