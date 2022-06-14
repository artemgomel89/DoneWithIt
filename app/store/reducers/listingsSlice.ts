import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListingsState, Listing } from "../../models/IListing";

const initialState: ListingsState = {
  data: [
    {
      categoryId: 3,
      description:
        "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
      id: 102,
      images: [
        {
          thumbnailUrl: "http://192.168.100.2:9000/assets/camera1_thumb.jpg",
          url: "http://192.168.100.2:9000/assets/camera1_full.jpg",
        },
      ],
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      price: 300,
      title: "Canon 400D (Great Condition)",
      userId: 1,
    },
  ],
  isLoading: false,
  error: "",
};

export const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    listingsFetching(state) {
      state.isLoading = true;
    },
    listingsFetchingSuccess(state, action: PayloadAction<Listing[]>) {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload.reverse();
    },
    listingsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default listingsSlice.reducer;
