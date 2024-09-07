import { backendApi, localApi } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorMiddleware } from "./middlewares";

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
    [localApi.reducerPath]: localApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      backendApi.middleware,
      localApi.middleware,
      rtkQueryErrorMiddleware
    );
  },
});

setupListeners(store.dispatch);
