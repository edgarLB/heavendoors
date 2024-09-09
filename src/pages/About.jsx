export default function About() {
    const GOOGLE_KEY = import.meta.env.GOOGLE_MAPS_API_KEY;
    const address = "24760+Sunnymead+Blvd+Ste+106,+Moreno+Valley,+CA+92553";
    const url = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}&q=${address}`;
    return (
        <div className="page-container">
            <div className="page-body">
                <h2>About</h2>
                <iframe
                    width="600"
                    height="450"
                    style={{border: 0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={url}>
                </iframe>
            </div>
        </div>
    )
}