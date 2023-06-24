import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
     initialState: '',
    reducer: {
        changeFilter(state, action) {
            state.filter = action.payload;
        }
    }
});

export const { changeFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;