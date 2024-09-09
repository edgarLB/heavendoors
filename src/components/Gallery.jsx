export default function Gallery(props) {
    const {images, type} = props;
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`${type, index + 1}`} style={type === "Service" ? {height: '20em'} : {height: '30em'}}/>
                </div>
            ))}
        </div>
    )
}