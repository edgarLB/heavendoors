import mapIMG from "../assets/map.jpg";
import showRoom from "../assets/showroom.jpeg";

export default function About() {
     return (
        <div className="page-container">
            <div className="page-body">
                <h2>About</h2>
                <div className="split-container">
                    <div className="column">
                        <img src={showRoom} alt="map"/>
                        <p>At <span className="highlight">Heaven Doors</span>, we specialize in expertly installing
                            bi-fold patio doors,
                            providing seamless transitions between indoor and outdoor spaces. In addition to
                            installations, we offer a wide selection of high-quality doors, all available in
                            our showroom. As a family-owned business, we pride ourselves
                            on delivering personalized service and exceptional craftsmanship to our valued
                            clients across SoCal.</p>
                        <p className="link3">Questions? <a href="/contact"> Message Me</a></p>
                    </div>
                    <div className="column">
                        <h3>Visit Our Showroom</h3>
                        <p className="stock-banner">By Appointment Only</p>
                        <iframe
                            title="Google Maps location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.412099896791!2d-117.26213748478293!3d33.942756280635454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcaf5a5be4f14b%3A0x7e8c9ff553b8a3a!2s24760%20Sunnymead%20Blvd%20STE%20107%2C%20Moreno%20Valley%2C%20CA%2092553!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <p style={{margin: '0', textAlign: "center"}}>24760 Sunnymead Blvd Ste 107<br/>
                            Moreno Valley, CA 92553</p>

                    </div>
                </div>

            </div>
        </div>
     )
}