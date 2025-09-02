import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

interface User {
  _id: string;
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
  authError: string | null;
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
  } catch (error) {
    const apiError = error as ApiError;
    console.log(apiError);
    return rejectWithValue(
      apiError?.response?.data?.message || apiError?.message || "Login failed"
    );
  }
});

export const signup = createAsyncThunk(
  "/auth/signup",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/v1/signup", data);
      return res.data;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(
        apiError?.response?.data?.message ||
          apiError?.message ||
          "Signup failed"
      );
    }
  }
);

export const logout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/v1/logout");
      return res.data;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(
        apiError?.response?.data?.message ||
          apiError?.message ||
          "Logout failed"
      );
    }
  }
);

export const check = createAsyncThunk(
  "/auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/auth/v1/check");
      return res.data;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(
        apiError?.response?.data?.message ||
          apiError?.message ||
          "Logout failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    authUser: null,
    isLoading: true, // always start with loading true to prevent the protected routes to make route discition before auth check
    authError: null,
  } as AuthState,
  reducers: {
    clearError: (state: AuthState) => {
      state.authError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login?.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.isLoading = false;
        toast.success("Logged in");
      })
      .addCase(login?.rejected, (state, action) => {
        state.authError = action.payload || "Login failed";
        toast.error(state.authError);
        state.isLoading = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.isLoading = false;
        toast.success("Signed in");
      })
      .addCase(signup.rejected, (state, action) => {
        state.authError = (action.payload as string) || "Signup failed";
        state.isLoading = false;
        toast.error(state.authError);
      })
      .addCase(logout.fulfilled, (state) => {
        state.authUser = null;
        toast.success("Logged out");
      })
      .addCase(logout.rejected, (_, action) => {
        toast.error((action.payload as string) || "Logout failed");
      })
      .addCase(check.pending, (state) => {
         state.isLoading = true;
      })
      .addCase(check.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = action.payload;
      })
      .addCase(check.rejected, (store, action) => {
        store.isLoading = false;
        store.authError = action.payload as string;
      })
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
