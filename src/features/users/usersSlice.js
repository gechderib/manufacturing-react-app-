import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userUrl = "https://jsonplaceholder.typicode.com/users";
const initialState = []

export const fetchUsers = createAsyncThunk("user/fetchaUser", async () => {
    try{
        const response = await axios.get(userUrl)
        console.log(response.data)
        return response.data
    }catch(err){
        return err.message
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            // state.push(...action.payload)
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer