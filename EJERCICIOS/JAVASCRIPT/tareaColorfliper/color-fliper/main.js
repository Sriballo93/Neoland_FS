import './style.css'

const colorPalettes = {
  '#CBFF8C': 'Mindaro',
  '#E3E36A': 'Straw',
  '#C16200': 'Alloy Orange',
  '#881600': 'Dark Red',
  '#4E0110': 'Black Bean',
};





const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(colorPalettes).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = colorPalettes[color];
    colorPickerSelect.append(option);
  })
}



const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  const colorNameCode = document.querySelector("#color-name-code");
  console.log(colorNameCode)
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    colorName.innerText = colorPalettes[newColor];
    const colorNameText = ` Codigo hexadecimal: ${newColor}` 
    colorNameCode.innerText =  colorNameText ;
    console.log(event)
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();