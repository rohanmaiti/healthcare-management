import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import axiosInstance from "../../lib/axios";
import type { ApiError } from "../../utils/interfaces";

// interface Hospitaladmindetails {
    
// }

export const login = createAsyncThunk<
//   Hospitaladmindetails,
  { rejectValue: string }
>("/hospital-admin/dashboard/details", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/hospital-admin/v1/dashboard/details", data);
    return res.data;
  } catch (error) {
    const apiError = error as ApiError;
    console.log(apiError);
    return rejectWithValue(
      apiError?.response?.data?.message || apiError?.message || "Login failed"
    );
  }
});