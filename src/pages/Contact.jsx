import Form from "../components/Form.jsx";

export default function Contact() {
    return (
        <div className="page-container">

            <div className="page-body">
                <h2>Contact</h2>
                <div className="split-container">
                    <div className="column">
                        <h3>We're eager to answer all you questions!</h3>
                        <div>
                            <div className="hStack">

                                <i className="fa-solid fa-phone"></i>
                                <p style={{fontWeight: 'bold'}}>Call Us: </p>

                            </div>
                            <p style={{margin: '0', textAlign: "center"}}>(323) 550 - 0851</p>
                        </div>

                        <div className="column-item">

                            <div className="hStack">

                                <i className="fa-solid fa-location-dot"></i>
                                <p style={{fontWeight: 'bold'}}>Schedule a Vist:</p>
                            </div>
                            <p style={{margin: '0', textAlign: "center"}}>2470 Sunnymead Blvd Ste 107<br/>
                                Moreno Valley, CA 92553</p>
                        </div>

                        <div className="column-item">
                            <div className="hStack">
                                <i className="fa-solid fa-handshake"></i>
                                <p style={{fontWeight: 'bold'}}>Connect with Us:</p>
                            </div>
                            <div className="facebook-center">
                                <a href="/home">
                                    <div className="hStack facebook">
                                        <i className="fa-brands fa-square-facebook"></i>
                                        <p>Facebook</p>
                                    </div>
                                </a>
                            </div>

                        </div>


                    </div>
                    <div className="column">
                        <h3>Send Us A Message</h3>
                        <Form/>
                    </div>
                </div>


            </div>
        </div>
    )
}