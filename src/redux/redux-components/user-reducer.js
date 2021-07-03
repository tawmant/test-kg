import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
	name: 'reducerUser',
	initialState: {
		currentUser: {},
		isAuth: false,
	},
	reducers: {
		setUser(state, action) {
			state.currentUser = action.payload;
			state.isAuth = true;
		},
		logout(state) {
			localStorage.removeItem('token');
			state.isAuth = false;
		},
	},
});

export const { setUser, logout } = toolkitSlice.actions;
export default toolkitSlice.reducer;
