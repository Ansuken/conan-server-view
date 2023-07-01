import { createSlice } from "@reduxjs/toolkit";

export const loreSlice = createSlice({
    name: 'lore',
    initialState: {
        lore: []
    },
    reducers: {
        setLore: ( state, action ) => {
            state.lore = action.payload;
        }
    }
});

export const { 
    setLore
} = loreSlice.actions;