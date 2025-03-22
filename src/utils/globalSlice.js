import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:"global",
    initialState:{
        isMenuOpen : true,
        isDark : false
    },
    reducers:{
        toggleIsMenuOpen:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        toggleIsDark : (state) =>{
            state.isDark=!state.isDark
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false
        }
    }
})
export const {toggleIsMenuOpen,toggleIsDark,closeMenu} = globalSlice.actions;
export default globalSlice.reducer;