import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VideoCarousel({ videoIds }) {
    if (!videoIds || videoIds.length === 0) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {videoIds.map((id, idx) => (
                <div key={idx} style={{ padding: "10px" }}>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            paddingBottom: "100%",
                        }}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${id}?mute=1&autoplay=0&rel=0`}
                            title={`YouTube video ${idx}`}
                            frameBorder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
}
