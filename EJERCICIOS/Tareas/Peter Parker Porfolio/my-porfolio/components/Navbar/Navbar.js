import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
    <div class="logoscontainer">

          <img class="logo1" src= "https://res.cloudinary.com/dg2xjawnt/image/upload/v1675184186/My-Porfolio/kuribo_u5uew7.png" alt="LogodeYugioh"> 

          <img class="logo" src= "https://res.cloudinary.com/dg2xjawnt/image/upload/v1675177856/My-Porfolio/yugiohlogo_etgogs.png" alt="LogodeYugioh"> 

          <img class="logo2" src= "https://res.cloudinary.com/dg2xjawnt/image/upload/v1675184181/My-Porfolio/dragon_amrb2u.png" alt="LogodeYugioh"> 

    </div>  
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
    <li>
    <a href="#" id="monsters">Monsters</a>
    </li>
    <li>
    <a href="#" id="spellcards">Spell Cards</a>
    </li>
    <li>
    <a id="trapcards">Trap Cards</button>
    </li>
  </ul>
</nav>
`;