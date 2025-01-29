import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSummarizationOptions: {
        summarizationLength: null,
        areaOfFocus: null,
        documentType: null,
        tone: null
    }
}

export const noteOptionsSlice = createSlice({
    name: "noteOptions",
    initialState,
    reducers: {
        setSelectedSummarizationOptions: (state, action) => {
            state.selectedSummarizationOptions = action.payload;
        },
    },
})

export const { setSelectedSummarizationOptions } = noteOptionsSlice.actions;
export default noteOptionsSlice.reducer;