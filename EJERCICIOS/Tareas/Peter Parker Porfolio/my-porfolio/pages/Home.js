import "./Home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    
        <img class="img2" src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675185734/My-Porfolio/shada-lg_m3acvg.png" alt="LogoEgipcio" />
        <p>
            Egyptian secrets are revived.Ancient powers have survived.When wrong from right's
            not black and white.Friends will help to win the fight.Solve the puzzle's mystery.Unlock the hero's destiny.Now      alter egos no one knows.Side by side they fight their foes.
        </p>
        <img class="img1" src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675185675/My-Porfolio/_yami-yugi-yugioh-png_wm8gg9.png" alt="LogoYugi" />
    </section>`;
};