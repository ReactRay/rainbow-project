import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    id?: string;
    username: string;
    email: string;
    image?: string;
    token?: string;
}

interface UserState {
    currentUser: User | null;
}

// ✅ Load from localStorage if available
const savedUser = localStorage.getItem("user");
const initialState: UserState = {
    currentUser: savedUser ? JSON.parse(savedUser) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save
            localStorage.setItem("token", action.payload.token || ""); // optional
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
