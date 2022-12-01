import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const PostReaction = ({post}) => {
  const dispatch = useDispatch();
  const reactions = {
    thumbsup:"TT",
    wow: "ww",
    heart: "HH",
    rocket: "RR",
    coffee: "CC",
  };
  return <div>
    <button className="m-2" onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:"thumbsup"}))}>TT {post.reactions.thumbsup}</button>
    <button className="m-2" onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:"wow"}))}>WW {post.reactions.wow}</button>
    <button className="m-2" onClick={()=>dispatch(reactionAdded({postId:post.id, reaction:"heart"}))}>HH {post.reactions.heart}</button>
    <button className="m-2" onClick={()=>dispatch(reactionAdded({postId:post.id, reaction:"rocket"}))}>RR {post.reactions.rocket}</button>
    <button className="m-2" onClick={()=>dispatch(reactionAdded({postId:post.id, reaction:"coffee"}))}>CC {post.reactions.coffee}</button>
  </div>;
};

export default PostReaction;
