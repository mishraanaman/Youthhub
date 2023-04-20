import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen: false,
        isDarkMode:false
    },
    reducers:{
        toggleMenu:(state)=> {state.isMenuOpen = !state.isMenuOpen},
        closeMenu: (state)=> {state.isMenuOpen = false},
        toggleDarkMode:(state)=> {state.isDarkMode =!state.isMenuOpen}
    }
})

export const {toggleMenu, closeMenu, toggleDarkMode} =appSlice.actions

export default appSlice.reducer;