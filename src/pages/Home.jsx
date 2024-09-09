import Hero from "../components/Hero.jsx";
import Taglines from "../components/Taglines.jsx";
import Products from "./Products.jsx";
import Projects from "./Projects.jsx";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Taglines/>
            <Projects/>
        </div>
    )
}