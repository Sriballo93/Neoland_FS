import './style.css'

const colorPicker=document.querySelector("#color-picker");
const colorName =document.querySelector("#color-name-code");
const mybody = document.querySelector('body')

colorPicker.addEventListener('input', (event) => {
  const mybody = document.querySelector('body');
  mybody.style.background = event.target.value;
} )