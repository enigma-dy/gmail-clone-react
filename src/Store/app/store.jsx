import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { toggleSlice } from "../Features/toggleSlice";
import { gmailApi } from "../Service/ApiSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    [gmailApi.reducerPath]: gmailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gmailApi.middleware),
});

setupListeners(store.dispatch);

export default store;
