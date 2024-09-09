export default function Project(props) {
    const { title, img1, img2, video, before } = props;
    return (
        <div className="products">
            <h3>{title}</h3>
            <div className="image-grid">
                <div className="image-item caption">
                    <p>{before ? "Before" : "Exterior"}</p>
                    <img src={img1} alt={title}/>
                </div>
                <div className="image-item caption">
                    <p>{before ? "After" : "Interior"}</p>
                    <img src={img2} alt={title}/>

                </div>
                <div className="image-item caption">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${video}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}