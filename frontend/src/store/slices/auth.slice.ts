import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import axiosInstance from "../../lib/axios";

interface User {
  id: string;
  email: string;
  userType:
    | "user"
    | "hospital-admin"
    | "doctor"
    | "inventory-manager"
    | "receptionist";
  firstName?: string;
  lastName?: string;
}

interface AuthState {
  authUser: User | null;
  isLoading: boolean;
  authError: any | null;
}

interface LoginCredentials {
  email: string;
  password: string;
  userType: string;
}

export const login = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: string }
>("/auth/login", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/auth/v1/login", data);
    return res.data;
  } catch (error: unknown) {
    return rejectWithValue(error?.response?.data || "login failded");
  }
});

export const signup = createAsyncThunk('/auth/signup', async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post('/auth/v1/signup', data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.message);
    }
})

export const logout = createAsyncThunk('/auth/logout', (data, {rejectWithValue}) => {
    try {
        const res = axiosInstance.post('/auth/v1/logout');
        return res.data;
    } catch (error) {
        return rejectWithValue(error?.response?.message);
    }
})

const authSlice = createSlice<any>({
  name: "authSlice",
  initialState: {
    authUser: null,
    isLoading: false,
    authError: null,
  },
  reducers: {
    clearError: (state:AuthState) => {
        state.authError = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(login?.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.isLoading = false
        toast.success('Logged in');
    })
    .addCase(login?.rejected, (state, action) => {
        state.authError = action.payload;
        toast.error(state?.authError?.message);
        state.isLoading = false;
    })
    .addCase(signup.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(signup.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.isLoading = false;
        toast.success('Signed in');
    })
    .addCase(signup.rejected, (state, action) => {
        state.authError = action?.payload;
        state.isLoading = false;
        toast.error(state.authUser?.message);

    })
    .addCase(logout.fulfilled, (state) => {
        state.authUser = null;
        toast.success('Logged out');
    })
    addCase(logout.rejected, (state, action ) => {
        toast.error(action?.payload?.message);
    })
  }
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
