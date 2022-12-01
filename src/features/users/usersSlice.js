import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:"1", name: "Getachew Derib"},
    {id:"2", name: "Yordanos Mogess"},
    {id:"3", name: "Solomon Kassahun"},
    {id:"4", name: "Akililu Wondie"}
]

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer