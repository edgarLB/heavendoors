import Gallery from "../components/Gallery.jsx";
import sortStandard from "../assets/sortStandard.png"
import sortFrench from "../assets/sortFrench.png"
import sortPivot from "../assets/sortPivot.png"
import sortSliding from "../assets/sortSliding.png"
import sortFold from "../assets/sortFold.png"
import sortWindow from "../assets/sortWindow.png"
import React, {useState} from "react";
import DetailsPopUp from "../components/DetailsPopUp.jsx";
export default function Products() {

    const [showPopUp, setShowPopUp] = useState(false); // State to control pop-up visibility

    const handleDetailsClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowPopUp(true); // Show the pop-up
    };

    const closePopUp = () => {
        setShowPopUp(false); // Close the pop-up when needed
    };

    function SortIMG(img, id, alt) {
        this.img = img;
        this.id = id;
        this.alt = alt;
    }

    const products = [
        new SortIMG(sortStandard, 1, "Standard Doors"),
        new SortIMG(sortFrench, 2, "French Doors"),
        new SortIMG(sortPivot, 3, "Pivot Doors"),
        new SortIMG(sortSliding, 4, "Sliding Doors"),
        new SortIMG(sortFold, 5, "Folding Doors"),
        new SortIMG(sortWindow, 6, "Windows"),

    ]

    const [sort, setSort] = useState(0);
    const [sortTitle, setSortTitle] = useState("All Doors and Windows");
    const handleSortChange = (id, title) => {
        if (id === sort) {
            setSortTitle("All Doors and Windows")
            setSort(0);
        } else {
            setSortTitle(title)
            setSort(id);
            setMaterial("All")
        }
    }

    const listOffer = ["Special Orders and Colors (Fast 8-10 Weeks Lead Time!)",
        "Lock-Set and Key Included",
        "Heavy Duty German Hardware",
        "Variety of Sizes",
        "Bifold, Sliding, and French Doors",
        "Composite Bulletproof Doors",
        "Delivery Options",
        "Standard Doors + more!"
    ]

    const [material, setMaterial] = useState('All');
    const allMaterials = ['All', 'Rod Iron', 'Composite Bullet-Proof', 'Aluminum'];

    // Conditional logic for materials based on sort value
    const materials = sort === 0
        ? allMaterials // Show all options
        : sort === 6
            ? [allMaterials[0], allMaterials[3]] // Show option 3 and 0
            : allMaterials.slice(0, 3); // Show options 0-2

    const handleMaterialChange = (e) => {
        setMaterial(e.target.value);
    };
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

                <div className="products-sort">
                    {products.map((item, index) => (
                        <div className={item.id === sort ? "products-item selected" : "products-item"} onClick={() => handleSortChange(item.id, item.alt)}>
                            <img src={item.img} alt={item.alt}/>
                            <p>{item.alt}</p>
                        </div>


                    ))}
                </div>

                <div className="vStack" style={{justifyContent: "space-between"}}>
                    <div className="vStack">
                        <h2>{sortTitle}</h2>

                        <div className="hStack" style={{justifyContent: "space-between"}}>
                            <p className="link3" style={{justifyContent: 'flex-start', margin: '0'}}>
                                <a href="#" onClick={handleDetailsClick}>Details</a>
                            </p>

                            {/* Pass the show and onClose props to DetailsPopUp */}
                            <DetailsPopUp show={showPopUp} onClose={closePopUp}/>
                            <div className="hStack">
                                <p style={{fontWeight: 'bold'}}>Material:</p>
                                <div className="pill-dropdown">
                                    <select value={material} onChange={handleMaterialChange}
                                            className="pill-shaped-select">
                                        {materials.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="fa-solid fa-caret-down select-arrow"></i>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <Gallery type="Door" material={material} open={sort}/>


            </div>
        </div>
    )
}