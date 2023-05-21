import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const URL = "http://localhost:8080"

export const getFimls = createAsyncThunk(
    "getFimls",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${URL}/films`)
            return data.reverse()
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const GetItemFilms = createAsyncThunk(
    "GetItemFilms/details",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${URL}/films-Item`)
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const fimlsReducer = createSlice({
    name: "FimlsReducer",
    initialState: {
        isLoading: false,
        data: [],
        dataItem: null,
        isSuccses: false,
        errorMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFimls.pending, (state,) => {
                state.isLoading = true
            })
            .addCase(getFimls.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccses = true
                state.data = payload
            })
            .addCase(getFimls.rejected, (state, { payload }) => {
                state.isLoading = false
                state.errorMessage = payload
            })
            .addCase(GetItemFilms.fulfilled, (state, action) => {
                state.dataItem = action.payload
            })
    }
})

export default fimlsReducer.reducer