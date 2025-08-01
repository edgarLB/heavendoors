import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_GALLERY_ID,
    accessToken: import.meta.env.VITE_CONTENT_KEY,
});

export const fetchVideos = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'video',
            order: '-sys.createdAt',
        });

        const videoUrls = response.items.flatMap((item) => item.fields.vidUrl || []);

        const videos = videoUrls.map((url) => {
            const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
            const videoId = match ? match[1] : null;
            return videoId;
        }).filter(Boolean); // remove nulls if any

        return videos;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};
