import apiClient from "./client";
import PATH from "../constants/path";

const getListings = () => apiClient.get(PATH.LISTINGS);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.id);
  data.append("description", listing.description);
  data.append("userId", listing.userId);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location) {
    data.append("location", listing.location);
  }

  return apiClient.post(PATH.LISTINGS, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });

  // content-type
  // application/json by default
  // multipart/form-data
};

const deleteListing = (listingId) =>
  apiClient.delete(`${PATH.LISTINGS}/${listingId}`);

export default {
  getListings,
  addListing,
  deleteListing,
};
