import { configureStore } from '@reduxjs/toolkit';

import { homepageApi } from '../homepageAPI';

const store = configureStore({
  reducer: {
    [homepageApi.reducerPath]: homepageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homepageApi.middleware),
});

export default store;
