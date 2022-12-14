import { createSlice, nanoid } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchpost", async () => {
  try {
    const response = await axios.get(postUrl);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialData) => {
    try {
      const response = await axios.post(postUrl, initialData);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (newData) => {
  const {id} = newData
  try{
    const response = await axios.put(`${postUrl}/${id}`, newData)
    console.log(response.date)
    return response.data
  }catch(err){
    // return err.message
    return newData // only for testing redux 
  }
})

export const deletePost = createAsyncThunk("posts/deletePosts", async (initialPost)=> {
  const {id} = initialPost
  try{
    const response = await axios.delete(`${postUrl}/${id}`)
    if(response.status === 200) return initialPost
    return `${response.status}: ${response.statusText}`
  }catch(err){
    return err.message
  }
})
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            body,
            userId,
            reactions: {
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      console.log(action.payload);
      const { postId, reaction } = action.payload;
      const post = state.posts.find((post) => postId === post.id);
      post.reactions[reaction]++;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const reactions = {
          thumbsup: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        action.payload.forEach((element) => {
          element.date = sub(new Date(), { minutes: min++ }).toISOString();
          element.reactions = reactions;
        });

        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log("error");
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsup: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts.push(action.payload);
      }).addCase(updatePost.fulfilled, (state, action) => {
        if(!action.payload.id){
          console.log(`now user with thsi id`)
          console.log(action.payload)
          return
        }
        const {id} = action.payload
        action.payload.date = new Date().toISOString()
        const posts = state.posts.filter(post => post.id !== id)
        state.posts = [...posts, action.payload]
      }).addCase(deletePost.fulfilled, (state, action)=>{
        if(!action.payload.id){
          console.log("can't delete a post")
          console.log(action.payload)
          return
        }
        const {id} = action.payload
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = posts;
      })
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
