import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import miscSlice from "./slices/misc-slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    misc: miscSlice,
  },
});

// Redux ile ilgil bir kac kavram.
// - State
// - Action - Stateyi guncellemek icin action kullanirsin.
// - Reducer
