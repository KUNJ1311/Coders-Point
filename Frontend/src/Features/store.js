import { configureStore } from "@reduxjs/toolkit";
import themesSliceReducer from "./themeSlice";
import usersSliceReducer from "./userSlice";
export const store = configureStore({
	reducer: {
		themeKey: themesSliceReducer,
		userKey: usersSliceReducer,
	},
});
