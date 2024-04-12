import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favs",
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFav = favoritesSlice.actions.addFav;
export const removeFav = favoritesSlice.actions.removeFav;
export default favoritesSlice.reducer;
