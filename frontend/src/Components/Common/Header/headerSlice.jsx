import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        menu: [],
        image: '',
        linkText: '',
        isScrolled: false,
    },
    reducers: {
        setMenu: (state, action) => {
            // Ensure the payload is an array and create a new array
            state.menu = [...action.payload];
        },
        setScrollStatus: (state, action) => {
            state.isScrolled = action.payload;
        },
        setBannerImage: (state, action) => {
            state.image = action.payload;
        },
        setBannerTitle: (state, action) => {
            state.linkText = action.payload;
        },
    },
});

export const { setMenu, setScrollStatus, setBannerImage, setBannerTitle } = headerSlice.actions;
export default headerSlice.reducer;
