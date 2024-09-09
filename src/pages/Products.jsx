import image1 from '../assets/doors/door1.jpg'
import image2 from '../assets/doors/door2.jpg'
import image3 from '../assets/doors/door3.jpg'
import image4 from '../assets/doors/door4.jpg'
import image5 from '../assets/doors/door5.jpg'
import image6 from '../assets/doors/door6.jpg'
import image7 from '../assets/doors/door7.jpg'
import image8 from '../assets/doors/door8.jpg'
import image9 from '../assets/doors/door9.jpg'
import image10 from '../assets/doors/door10.jpg'
import image11 from '../assets/doors/door11.jpg'
import Gallery from "../components/Gallery.jsx";

export default function Products() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
    const listOffer = ["Special Orders and Colors",
        "Lock-Set and Key Included",
        "Heavy Duty Hardware",
        "Varitey of Sizes",
        "Bifold, Sliding, and French Doors",
        "Composite Bulletproof Doors",
        "Delivery Options",
        "Standard Doors + more!"
    ]
    return (
        <div className="page-container">
            <div className="page-body">
                <h2>Products</h2>
                <p className="stock-banner">Doors are in stock! Visit our showroom and see the quality.</p>
                <div className="products">
                    <h3>We Offer</h3>

                    <ul>
                        {listOffer.map(item => (
                            <li key={item.id}>{item}</li>
                        ))}
                    </ul>

                </div>
                <p className="link3">Questions? <a href="/contact"> Message Me</a></p>
                <Gallery images={images} type={"Door"} />


            </div>
        </div>
    )
}