import { createSlice } from '@reduxjs/toolkit';


const storedAuth = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("auth")) : null;

const initialState = storedAuth || {
  isAuthenticated: false,
  username: "",
  email: "",
  isAdmin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.email = null;
      state.user = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
