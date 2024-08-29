import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reduce: {
        setOrigin: (state, action) => {
            state.origin=action.payload;
        },
        setDestionation: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination,
    setTravelTimeInfformation } = navSlice.actions;

 export const selectOrigin = (state) => state.nav.origin;
 export const selectDestiantion = (state) => state.nav.destiantion;
 export const selectTravelTimeInfformation  = (state) => state.nav.TravelTimeInfformation ;

 export default navSlice.reducer;