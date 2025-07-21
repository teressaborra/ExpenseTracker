import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("photo", imageFile); // ✅ MUST match backend multer field

  try {
   const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

    return response.data; // Should return { imageUrl: "https://..." }
  } catch (error) {
    console.error('Error uploading the image:', error);
    throw error;
  }
};

export default uploadImage;
