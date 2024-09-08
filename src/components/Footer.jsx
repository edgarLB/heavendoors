export default function Footer() {
    return (
        <footer>
            <div className="footer-item">
                <h4>Heaven Doors</h4>
                <p>Door Retailer, Bi-fold Door Installation Specialist, Renovation</p>
                <p>Serving SoCal</p>
            </div>
            <div className="footer-item center">
                <h4>Socials</h4>
                <i className="fa-brands fa-facebook" style={{fontSize: '1.5em'}}></i>
            </div>
            <div className="footer-item">
                <h4>Find Us</h4>
                <p>2470 Sunnymeaf Blvd Ste 106
                    Moreno Valley, CA 92553</p>
                <div className="hStack">
                    <i className="fa-solid fa-phone"></i>
                    <p>(323) 555- 5555</p>
                </div>
            </div>

        </footer>
    )
}