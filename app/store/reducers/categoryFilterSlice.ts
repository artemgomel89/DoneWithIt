import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categoriesToFilter: string[];
}

interface SetCategoriesToFilter {
  id: string;
  active: boolean;
}

const initialState: FilterState = {
  categoriesToFilter: [],
};

export const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    setCategoriesToFilter: (
      state,
      action: PayloadAction<SetCategoriesToFilter>
    ) => {
      if (action.payload.active) {
        state.categoriesToFilter = state.categoriesToFilter.filter(
          (id) => id !== action.payload.id
        );
      } else {
        state.categoriesToFilter.push(action.payload.id);
      }
    },
  },
});

export const { setCategoriesToFilter } = categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
