import {useEffect, useState} from "react";

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "src/assets/heroIMG.jpg",
        "src/assets/heroIMG2.jpg",
        "src/assets/heroIMG3.jpg",
        "src/assets/heroIMG4.jpg",
        "src/assets/heroIMG5.jpg"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="hero"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="overlay"></div>
            <div className="hero-body">
                <h1>Heaven Doors</h1>
                <h3>Door Retailer, Bi-fold Door Installation Specialist, Renovation<br/>Serving SoCal</h3>
                <button>Contact</button>
            </div>
        </div>
    )
}
