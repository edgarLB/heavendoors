import image1 from '../assets/patio/patio1.jpeg'
import image2 from '../assets/patio/patio2.jpeg'
import image3 from '../assets/patio/patio3.jpeg'
import image4 from '../assets/patio/patio4.jpeg'
import image5 from '../assets/patio/patio5.jpeg'
import image6 from '../assets/patio/patio6.jpeg'
import image7 from '../assets/patio/patio7.jpeg'
import image8 from '../assets/patio/patio8.jpeg'
import image9 from '../assets/patio/patio9.jpg'
import image10 from '../assets/patio/patio10.jpg'
import image11 from '../assets/patio/patio11.jpg'
import image12 from '../assets/patio/patio12.jpg'
import image13 from '../assets/patio/patio13.jpg'
import Gallery from "../components/Gallery"


export default function Services() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];
    return (
        <div className="page-container">
            <div className="page-body">
                <h2>Services</h2>
                <Gallery images={images} type={"Service"}/>
            </div>
        </div>
    )
}