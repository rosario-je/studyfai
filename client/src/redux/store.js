import { configureStore } from '@reduxjs/toolkit';

//Reducers imports
import sidebarReducer from './sidebarSlice'
import noteOptionsReducer from './noteOptionsSlice'
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    noteOptions: noteOptionsReducer
  },
});