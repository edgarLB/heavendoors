export default function Project(props) {
    const { title, img1, img2, video, before } = props;
    return (
        <div className="projects">
            <h3>{title}</h3>
            <div className="image-grid-home">
                <div className="image-item-home caption">
                    <p>{before ? "Before" : "Exterior"}</p>
                    <img src={img1} alt={title}/>
                </div>
                <div className="image-item-home caption">
                    <p>{before ? "After" : "Interior"}</p>
                    <img src={img2} alt={title}/>

                </div>
                <div className="image-item-home">
                    <div className="video-responsive">
                        <iframe

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