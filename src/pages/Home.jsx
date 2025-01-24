import Hero from "../components/Hero.jsx";
import Taglines from "../components/Taglines.jsx";
import Products from "./Products.jsx";
import Projects from "./Projects.jsx";
import ShopMenu from "./ShopMenu.jsx";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Taglines/>
            <ShopMenu/>
            <Projects/>
        </div>
    )
}