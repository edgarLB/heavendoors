import { createClient } from 'contentful'

const client = createClient({
    space: import.meta.env.VITE_GALLERY_ID,
    accessToken: import.meta.env.VITE_CONTENT_KEY,
})

export const fetchGalleryImages = async (isPatio) => {
    try {
        const response = await client.getEntries({
            content_type: 'gallery',
            'fields.type': isPatio, // true for Patio, false for Door
        })

        if (response.items.length > 0) {
            // Extract the image URLs and their tags for the correct gallery
            const images = response.items[0].fields.images.map((image) => {
                const imageUrl = image.fields.file.url;

                // Extract tags from the image metadata
                const materialTags = image.metadata.tags.filter(tag => tag.sys.id.startsWith('material'));
                const openingTags = image.metadata.tags.filter(tag => tag.sys.id.startsWith('open'));

                return {
                    url: imageUrl,
                    material: materialTags.map(tag => tag.sys.id.replace('material', '')), // Get tag name
                    open: openingTags.map(tag => tag.sys.id.replace('open', '')),   // Get tag name
                };
            }).reverse();

            return images;
        } else {
            console.log('No gallery found for this type.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}