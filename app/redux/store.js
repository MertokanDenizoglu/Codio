"use client"

import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import basketReducer from './basketSlice'
export const store = configureStore({
  reducer: {
    drawer:drawerReducer,
    basket:basketReducer,

  },
})