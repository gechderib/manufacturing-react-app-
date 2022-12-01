import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "first title",
    content: "this is the content for the first title",
  },
  {
    id: "2",
    title: "second title",
    content: "This is the content for the second title This is the content for the second title vThis is the content for the second title",
  },
];


const postsSlice = createSlice({
    name:"post",
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})

export default postsSlice.reducer