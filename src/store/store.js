import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news/newsSlice';
import { serverSlice } from './server/serverSlice';
import { loreSlice } from './lore/loreSlice';

export const store = configureStore({
    reducer: {
        lore: loreSlice.reducer,
        news: newsSlice.reducer,
        serverInfo: serverSlice.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})