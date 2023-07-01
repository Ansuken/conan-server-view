import { createSlice } from "@reduxjs/toolkit";

export const serverSlice = createSlice({
    name: 'server',
    initialState: {
        serverInfo: []
    },
    reducers: {
        setServerInfo: ( state, action ) => {
            state.serverInfo = action.payload;
        }
    }
});

export const { 
    setServerInfo
} = serverSlice.actions;