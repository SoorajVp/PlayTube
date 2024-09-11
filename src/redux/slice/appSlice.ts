
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
    darkMode: boolean;
    openMenu: boolean;
}

const initialState:initialStateType = {
    darkMode: false,
    openMenu: true
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        toggleSideMenu: (state, action: PayloadAction<boolean>) => {
            state.openMenu = action.payload;
        },
    },
});

export const { toggleDarkMode, toggleSideMenu } = appSlice.actions;

export default appSlice.reducer;
