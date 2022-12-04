import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostExcerpt from "./PostExcerpt";
import {
  fetchPosts,
  selectAllPosts,
  getPostError,
  getPostStatus,
} from "./postsSlice";

const PostList = () => {
  // const dispatch = useDispatch();
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);
  const posts = useSelector(selectAllPosts);

  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, postStatus]);

  let content;
  if (postStatus === "loading") {
    content = <p>loading ....</p>;
  } else if (postStatus === "succeeded") {
    const orderedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    const renderPost = orderedPost.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
    content = renderPost;
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default PostList;
