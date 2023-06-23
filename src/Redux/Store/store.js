import { configureStore } from '@reduxjs/toolkit'
import getUserData from '../Reducer/getUserData'

export const store = configureStore({
    reducer: {
        getUserFilledData: getUserData
    },
})