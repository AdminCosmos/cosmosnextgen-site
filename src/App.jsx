import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
