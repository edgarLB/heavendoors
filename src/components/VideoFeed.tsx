import { useEffect, useState } from "react";
import { fetchVideos } from "../fetchVideos";
import VideoCarousel from "./VideoCarousel";

export default function VideoFeed( ) {
    const [videoIds, setVideoIds] = useState([]);

    useEffect(() => {
        fetchVideos().then(setVideoIds);
    }, []);

    return (
        <div style={{ margin: "2em" }}>
            <h2 style={{alignSelf: 'flex-start'}}>Video Showcase</h2>
            {videoIds.length > 0 && <VideoCarousel videoIds={videoIds} />}
        </div>
    )
}