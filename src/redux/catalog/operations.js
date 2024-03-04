import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://medicine-delivery-app-backend-o7a6.onrender.com/api/";

export const setShops = createAsyncThunk(
  "catalog/fetchShops",
  async (shopId, thunkAPI) => {
    try {
      const response = await axios.get(`shops`);
      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setMedicines = createAsyncThunk(
  "catalog/fetchMedicines",
  async (shopId, thunkAPI) => {
    try {
      const response = await axios.get(`medicines/?_id=${shopId}`);
      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
