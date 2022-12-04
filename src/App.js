import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FormPost from "./features/posts/FormPost";
import PostList from "./features/posts/PostList";
import SinglePostPage from "./features/posts/SinglePostPage";



function App() {

  return (
  
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<PostList/>}/>
        <Route path="post">
          <Route index element={<FormPost/>}/>
          <Route path=":postId" element={<SinglePostPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
