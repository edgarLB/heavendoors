export default function Footer() {
    return (
        <footer>
            <div className="footer-item first">
                <h4>Heaven Doors</h4>
                <p>Door Retailer, Bi-fold Door Installation Specialist, Renovation</p>
                <p>Serving SoCal</p>
            </div>
            <div className="footer-item center">
                <h4>Socials</h4>
                <a className="facebook" href="" ><i className="fa-brands fa-facebook" style={{fontSize: '1.5em'}}></i></a>
            </div>
            <div className="footer-item last">
                <h4>Find Us</h4>
                <p>2470 Sunnymead Blvd Ste 107 <br/>
                    Moreno Valley, CA 92553</p>
                <div className="hStack">
                    <i className="fa-solid fa-phone"></i>
                    <p>(323) 550 - 0851</p>
                </div>
            </div>

        </footer>
    )
}