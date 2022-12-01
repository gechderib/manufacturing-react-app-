import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        postAdded:{
          reducer(state, action){
            state.push(action.payload)
          },
          prepare(title,content,userId){
            return{
              payload:{
                id:nanoid(),
                title,
                content,
                userId
              }
            }
          }
        }
    }
})

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer