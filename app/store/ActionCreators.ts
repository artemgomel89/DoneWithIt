import { AppDispatch } from ".";
import apiClient from "../api/client";
import PATH from "../constants/path";
import { Listing } from "../models/IListing";
import { listingsSlice } from "./reducers/listingsSlice";

export const fetchListings = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(listingsSlice.actions.listingsFetching());
    const resp = await apiClient.get<Listing[]>(PATH.LISTINGS);
    dispatch(listingsSlice.actions.listingsFetchingSuccess(resp.data));
  } catch (e) {
    dispatch(listingsSlice.actions.listingsFetchingError(e.message));
  }
};
