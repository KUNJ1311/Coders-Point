import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "userSlice",
	initialState: {
		data: null, // Set the initial value to null or whatever is appropriate
	},
	reducers: {
		setUserKeyData: (state, action) => {
			state.data = action.payload; // Update the state with the payload
			const name = state.data.name;
			return name;
		},
	},
});

export const { setUserKeyData } = userSlice.actions;
export default userSlice.reducer;
