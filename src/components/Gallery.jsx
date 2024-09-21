import {useEffect, useState} from "react";
import {fetchGalleryImages} from "../fetchGalleryImages.js";

export default function Gallery(props) {
    const {type, material, open} = props;

    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Determine the gallery type
    // 'Patio' -> true, 'Door' -> false
    const isPatio = type === 'Patio';

    useEffect(() => {
        fetchGalleryImages(isPatio).then(setImages);
    }, [isPatio]);

    // Filter images based on material and open type

    // Mapping the material labels to actual values in the data
    const materialMap = {
        'Rod Iron': 'iron',
        'Composite Bullet-Proof': 'composite',
        'Aluminum': 'aluminum',
        'All': 'All'
    };

    // Open tags corresponding to index (1, 2, 3, etc.)
    const openTags = ['standard', 'french', 'pivot', 'sliding', 'fold', 'window'];

    useEffect(() => {
        let newFilteredImages = images;

        // Filter by material
        if (material && material !== 'All') {
            const mappedMaterial = materialMap[material];
            newFilteredImages = newFilteredImages.filter((img) => {
                return img.material.some((tag) => tag === mappedMaterial);
            });
        }

        // Filter by open type
        if (open && open !== 0) {
            newFilteredImages = newFilteredImages.filter((img) => {
                return img.open.some((tag) => tag === openTags[open - 1]);
            });
        }

        setFilteredImages(newFilteredImages);
    }, [images, material, open]);



    const handleImageClick = (index) => {
        console.log(index)
        setSelectedImage(index);
        setIsOpen(true);
        console.log("Lightbox should open", isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handlePrev = () => {
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
    };

    const handleNext = () => {
        setSelectedImage((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
    };


    return (
        <>
            <div className={type === "Patio" ? "image-grid-patio" : "image-grid" }>
                {filteredImages.map((image, index) => (
                    <div key={index} className="image-item"
                         style={type === "Patio" ? { aspectRatio: '6 / 4' } : { height: '100%' }}
                         onClick={() => handleImageClick(index)}>
                        <img
                            src={image.url}
                            alt={`${type}, ${index + 1}`}
                        />
                        {/*<p>{image.material + " "+ image.open}</p>*/}
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="lightbox-overlay" onClick={handleClose}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={handleClose}><i className="fa-solid fa-x"></i></span>
                        <img className="lightbox-img" src={filteredImages[selectedImage].url} alt="Selected"/>
                    </div>
                    <span className="prev-btn" onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                    }}><i className="fa-solid fa-angle-left"></i></span>
                    <span className="next-btn" onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}><i className="fa-solid fa-angle-right"></i></span>

                </div>
            )}
        </>
    )
}