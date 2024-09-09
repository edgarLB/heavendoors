import mapIMG from "../assets/map.png";

export default function About() {
     return (
        <div className="page-container">
            <div className="page-body">
                <h2>About</h2>
                <div className="split-container">
                    <div className="column">
                        <p>At <span className="highlight">Heaven Doors</span>, we specialize in expertly installing bi-fold patio doors,
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
                        <img src={mapIMG} alt="map"/>
                        <p style={{margin: '0', textAlign: "center"}}>2470 Sunnymead Blvd Ste 107<br/>
                            Moreno Valley, CA 92553</p>

                    </div>
                </div>

            </div>
        </div>
     )
}