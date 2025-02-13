import { configureStore } from '@reduxjs/toolkit';

//Reducers imports
import sidebarReducer from './sidebarSlice'
import noteOptionsReducer from './noteOptionsSlice'
import pdfFileReducer from './pdfFileSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    noteOptions: noteOptionsReducer,
    pdfFile: pdfFileReducer
  },
});