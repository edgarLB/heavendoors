import detailsIMG from "../assets/details.jpeg"
import React from "react";

export default function DetailsPopUp({ show, onClose }) {
    if (!show) return null;

    const listDetails = ["2.0mm gauge frame 6063-5 thermal break aluminum profile",
        "Glass: double Tempered 5MM +18+5MM double clear glass +LOW-E",
        "All hardware is included; Silver/Black color (lock, handle and so on)",
        "Color: Black powder coated",
        "German brand hardware include",
        "Others: With Retractable Screen"
    ]
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="pop-up-container" onClick={(e) => e.stopPropagation()}>
                <h3>Details</h3>
                <p>Composite:</p>
                <ul style={{margin: '0'}}>
                    {listDetails.map(item => (
                        <li key={item.id}>{item}</li>
                    ))}
                </ul>
                <p>Glass:</p>
                <img src={detailsIMG}/>
                <button onClick={onClose}><i class="fa-solid fa-x"></i></button>
            </div>
        </div>

    )
}