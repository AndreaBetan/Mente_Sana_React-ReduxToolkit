import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './appSlice'

export const store = configureStore({
    reducer: {
        people: appSlice.reducer,
    },
})