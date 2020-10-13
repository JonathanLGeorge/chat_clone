import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null, //channel that we are in
    channelName: null, //name of channel
  },
  reducers: {
    setChannelInfo: (state, action) => {
      //state.app = action.payload;
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;
//state is the global layer, app is the app layer, and then the channels
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
