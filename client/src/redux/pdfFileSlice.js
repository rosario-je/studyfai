import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    files: null, 
    pdfText: null,
    summarizedText: null
}

export const pdfFileSlice = createSlice({
    name: 'pdfFile',
    initialState, 
    reducers: {
        setFile: (state, action) => {
            state.files = action.payload 
        },
        setPDFText: (state, action) => {
            state.pdfText = action.payload
        },
        setSummarizedText: (state, action) =>  {
            state.summarizedText = action.payload
        }
    }
})

export const {setFile, setPDFText, setSummarizedText} = pdfFileSlice.actions
export default pdfFileSlice.reducer