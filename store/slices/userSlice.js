import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  userRole:''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userRole = action.payload.userRole;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
