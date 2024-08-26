import { createSlice } from "@reduxjs/toolkit";

interface LocalityState {
  selectedLocality: {
    cityName: string;
    localityName: string;
    localityId: string;
    latitude: string;
    longitude: string;
    device_type: string;
  };
}

const initialState: LocalityState = {
  selectedLocality: {
    cityName: "",
    localityName: "",
    localityId: "",
    latitude: "",
    longitude: "",
    device_type: "",
  },
};

const localitySlice = createSlice({
  name: "locality",
  initialState,
  reducers: {
    setLocality: (state, action) => {
      state.selectedLocality = {
        ...state.selectedLocality,
        ...action.payload,
      };
    },
    clearLocality: (state) => {
      state.selectedLocality = {
        ...initialState.selectedLocality,
      };
    },
  },
});

export const { setLocality, clearLocality } = localitySlice.actions;
export default localitySlice.reducer;
