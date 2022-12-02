import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const PostReaction = ({ post }) => {
  const dispatch = useDispatch();
  const reactions = {
    thumbsup: "TT",
    wow: "WW",
    heart: "HH",
    rocket: "RR",
    coffee: "CC",
  };
  const reactionButton = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className="m-2"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>;
};

export default PostReaction;
