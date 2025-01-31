import Gallery from "../components/Gallery.jsx";
import React, {useState} from "react";
import DetailsPopUp from "../components/DetailsPopUp.jsx";
import ProductSorter from "../components/ProductSorter.jsx";
import products from "../productData";

export default function Products() {

    const [showPopUp, setShowPopUp] = useState(false); // State to control pop-up visibility

    const handleDetailsClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowPopUp(true); // Show the pop-up
    };

    const closePopUp = () => {
        setShowPopUp(false); // Close the pop-up when needed
    };


    const [sort, setSort] = useState(0);
    const [sortTitle, setSortTitle] = useState("All Doors and Windows");
    const [sortUrl, setSortUrl] = useState("https://shop.heavendoorsandwindows.com/");
    const handleSortChange = (id, title, url) => {
        setSortTitle(title);
        setSort(id);
        setSortUrl(url);

        if (title.includes("Wrought Iron")) {
            setMaterial("Wrought Iron");
        } else {
            setMaterial("All");
        }
    };

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
    const allMaterials = ['All', 'Wrought Iron', 'Composite Bullet-Proof', 'Aluminum'];

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
                <h2>Products Gallery</h2>
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
                <h2 style={{ paddingBottom: 0, marginBottom: '-1em', marginTop: '2em' }}>Sort Gallery by Type</h2>
                <ProductSorter products={products} activeSort={sort} onSortChange={handleSortChange}/>
                <div className="vStack" style={{justifyContent: "space-between"}}>
                    <div className="vStack">
                        <div className="hStack" style={{justifyContent: "space-between"}}>
                            <h2>{sortTitle}</h2>
                            <p className="link3" style={{justifyContent: 'flex-start', margin: '0'}}>
                                <a href="#" onClick={handleDetailsClick}>Details</a>
                            </p>
                        </div>

                        <div className="hStack" style={{justifyContent: "space-between"}}>


                            <p className="link3" style={{justifyContent: 'flex-start', margin: '0'}}>
                                <a href={sortUrl}>Shop</a>
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