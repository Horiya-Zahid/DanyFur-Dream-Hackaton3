import { createClient } from '@sanity/client';
import fetch from 'node-fetch';

// Initialize Sanity client
const client = createClient({
  projectId: "mhltupgb",
  dataset: "production",
  useCdn: false, // Set to true if you want faster reads
  apiVersion: '2025-01-13',
  token: "skIeLKIpDbZKwi4IRSpuQ8L1thUX5tnz4CbhO3zGmKhfA5IVlD2EHfYD6ORNRLxCoqQlXhBZiTZMpgijUxzwoOYDeAndLAEeA87Gj2wKlrlaGuRubQHel8tQGKHlBy0bSgVbLw4VUV9NpnpAgf4iukSThLjafnV0TmyUypvI6DFXKu8yDtOP", // Replace with your Sanity token
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: 'product',
        _id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        price: parseFloat(product.price),
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        imagePath: product.imagePath, // Store original image URL
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start the migration
migrateProducts();