import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVetsApi } from '../api/vets';

import { Vet } from '../model/Vet';

export interface VetState {
  vets: Array<Vet>;
}

const initialState: VetState = {
  vets: []
};

export const vetSlice = createSlice({
  name: 'vets',
  initialState,
  reducers: {
    loadVets: (state, action: PayloadAction<Vet[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.vets = action.payload;
    },
    clearVets: (state) => {
      state.vets = [];
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchVets.fulfilled, (state, action) => (state.vets = action.payload));
  }
});

export const fetchVets = createAsyncThunk(
  'vets/fetchVets',
  // Declare the type your function argument here:
  async () => await fetchVetsApi()
);

// Action creators are generated for each case reducer function
export const { loadVets, clearVets } = vetSlice.actions;
export const VetReducer = vetSlice.reducer;
export default VetReducer;
