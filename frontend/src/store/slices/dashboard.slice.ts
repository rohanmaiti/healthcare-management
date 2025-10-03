import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios";
import type { ApiError } from "../../utils/interfaces";

export const login = createAsyncThunk<{ rejectValue: string }>(
  "/hospital-admin/dashboard/details",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        "/hospital-admin/v1/dashboard/details"
      );
      return res.data;
    } catch (error) {
      const apiError = error as ApiError;
      console.log(apiError);
      return rejectWithValue(
        apiError?.response?.data?.message || apiError?.message || "Login failed"
      );
    }
  }
);

// const hospital_admin_slice = createSlice({
//   name: "hospital_admin_slice",
//   initialState: {
//     details: null,
//   } as any,
// });
