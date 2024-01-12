import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Redux ile ilgil bir kac kavram.
// - State
// - Action - Stateyi guncellemek icin action kullanirsin.
// - Reducer
