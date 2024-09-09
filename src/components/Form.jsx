import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "67149dd3-085d-4294-82b9-b171a6471fba");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" />
                <input type="number" name="phone" placeholder="Phone Number" required/>
                <textarea name="message" placeholder="Message" required></textarea>

                <button type="submit">Submit Form</button>

            </form>
            <p style={{textAlign : 'center'}}>{result}</p>

        </div>
    );
}