import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const renderPost = posts.map((post) => (
    <div className="border-2 rounded-tl-3xl rounded-br-3xl rounded border-gray-500 mb-5 p-5 text-white bg-gray-600" key={post.id}>
      <h3 className="font-bold font-mono">{post.title}</h3>
      <p className="text-justify">{post.content}</p>
      <PostAuthor userId={post.userId}/>
    </div>
  ));
  return <div>{renderPost}</div>;
};

export default PostList;
