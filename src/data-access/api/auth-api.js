import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postRegistrationData = createAsyncThunk(
  "auth/postRegistrationData",
  async (FormData, thunkAPI) => {
    try {
      let data = await axios.post(
        "http://localhost:3000/auth/sign-up",
        FormData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong", error);
    }
  }
);
export const postLoginData = createAsyncThunk(
  "auth/postLoginData",
  async (FormData, thunkAPI) => {
    try {
      let data = await axios.post(
        "http://localhost:3000/auth/sign-in",
        FormData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong", error);
    }
  }
);
