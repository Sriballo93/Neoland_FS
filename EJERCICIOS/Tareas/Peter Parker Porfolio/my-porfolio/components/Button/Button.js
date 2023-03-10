import "./Button.css";

export const Button = (icon, text) => `
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
</button>
`;