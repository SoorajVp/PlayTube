import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/appSlice'
// ...
const store = configureStore({
    reducer: {
        app: appSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store