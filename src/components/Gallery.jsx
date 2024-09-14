import {useState} from "react";

export default function Gallery(props) {
    const {images, type} = props;

    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-item" onClick={() => handleImageClick(index)}>
                        <img
                            src={image}
                            alt={`${type}, ${index + 1}`}
                            style={type === "Service" ? { height: '20em' } : { height: '30em' }}
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="lightbox-overlay" onClick={handleClose}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={handleClose}><i className="fa-solid fa-x"></i></span>
                        <img className="lightbox-img" src={images[selectedImage]} alt="Selected"/>
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