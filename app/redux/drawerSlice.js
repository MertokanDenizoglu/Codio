import { createSlice } from "@reduxjs/toolkit";


const drawerSlice = createSlice({
    name: "drawerSlice",
    initialState: false,
    reducers: {
        openDrawer: (state) => !state,
    }
});

export const { openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
