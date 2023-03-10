import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";

// import { Spells } from "./pages/Spells";
// import { Trap } from "./pages/Trap";
import { Projects } from "./pages/Projects";
import { Divider } from "./components/Divider/Divider";
// import { Monsters} from "./pages/Monsters";
// import { Home } from "./pages/Spells";
// import { Home } from "./pages/Trap";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
// linkPage("#monsters", Monsters);
// linkPage("#spellcards", Spells);
// linkPage("#trapcards", Trap);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());