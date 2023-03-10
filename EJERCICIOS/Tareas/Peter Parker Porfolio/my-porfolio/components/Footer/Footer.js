import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<img class="footerImg"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Konami_4th_logo_2.svg/2560px-Konami_4th_logo_2.svg.png" alt="logokonami"/>
<h2> <a href="mailto:sebariba93@gmail.com">Say hi to the developer →</a></h2>
<div>
${Button("https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/twitter_jftjzi.png", "Twitter")}
${Button("https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/github_imanj1.png", "GitHub")}
${Button("https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/linkedin_wji7hg.png", "LinkedIn")}
${Button("https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/telegram_ksic0d.png", "Telegram")}
</div>
`;