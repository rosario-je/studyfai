import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expanded: localStorage.getItem('sidebarExpanded') !== null 
        ? JSON.parse(localStorage.getItem('sidebarExpanded')) 
        : true,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setExpanded: (state, action) => {
            state.expanded = action.payload;
            localStorage.setItem('sidebarExpanded', JSON.stringify(action.payload));
        },
    },
})

export const { setExpanded } = sidebarSlice.actions;
export default sidebarSlice.reducer;

