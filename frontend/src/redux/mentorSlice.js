import { createSlice } from "@reduxjs/toolkit";

const mentorSlice = createSlice({
    name: "mentors",
    initialState: {
        searchQuery: "",
        selectedCategory: "All", // Add this
        mentors: [], // Array of mentors
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload; // Add this
        },
    },
});

export const { setSearchQuery, setSelectedCategory } = mentorSlice.actions;
export default mentorSlice.reducer;
