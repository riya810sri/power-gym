import axios from 'axios';

// Get BASE_URL from environment variables
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:5000';

console.log('Current BASE_URL:', BASE_URL);

// Universal API handler for session-based authentication
export const apihandler = async ({ url, method = 'GET', data = {}, headers = {}, params = {} }) => {
  try {
    const response = await axios({
      url: BASE_URL + url,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      params,
      withCredentials: true, // Important for session/cookie auth
    });
    console.log('API response:', response);
    return response.data;
  } catch (error) {
    console.log('API error:', error);
    throw error;
  }
};

// Image utility functions
export const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://via.placeholder.com/800x400?text=Course+Image';
  
  // If it's already a complete URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a relative path, prepend base URL
  return `${BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

export const handleImageError = (e, fallbackUrl = 'https://via.placeholder.com/800x400?text=Course+Image') => {
  console.log('Image failed to load:', e.target.src);
  if (e.target.src !== fallbackUrl) {
    e.target.src = fallbackUrl;
  }
};

export const handleImageLoad = (imageSrc) => {
  console.log('Image loaded successfully:', imageSrc);
};

// Function to fetch image with proper CORS handling
export const fetchImageWithCORS = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'image/*',
      },
    });
    
    if (response.ok) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.log('Failed to fetch image with CORS:', error);
    return 'https://via.placeholder.com/800x400?text=Course+Image';
  }
};

// ...add apihandlerwithauth if needed

