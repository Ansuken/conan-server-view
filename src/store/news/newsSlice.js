import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },
    reducers: {
        setNews: ( state, action ) => {
            state.news = action.payload;
        }
    }
});

export const { 
    setNews
} = newsSlice.actions;