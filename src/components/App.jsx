import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import WhyUs from "./WhyUs.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Training from "./Training.jsx";
import ScrollToHash from "./ScrollToHash.jsx"; // 👈 add this

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <Contact />
        </>
    );
}

export default function App() {
    return (
        <>
            <Navbar />
            <ScrollToHash /> {/* 👈 this makes /#contact work */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/training" element={<Training />} />
            </Routes>
            <Footer />
        </>
    );
}
