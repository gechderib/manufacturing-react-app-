import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { addNewPost, } from "./postsSlice";

const FormPost = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("")
  const [requestStatus, setRequestStatus] = useState("idle")

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const canSave = [title,content, userId].every(Boolean) && requestStatus === "idle";

  const renderUsers = users.map((user) => (
    <option className="" key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSaveClicked = () => {// 
    if(canSave){
      try{
        setRequestStatus("pending")
        dispatch(addNewPost({title, body:content, userId})).unwrap()
        setTitle("")
        setContent("")
        setUserId("")
      }catch(err){
        console.log("error happen", err)
      }finally{
        setRequestStatus("idle")
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-slate-800 font-bold font-mono block mb-1">
          Title
        </label>
        <input
          className="border rounded-lg block mb-1 px-3 py-2 w-full outline-blue-400"
          value={title}
          onChange={onTitleChange}
          placeholder="title..."
        />
        <select className="w-full border rounded-lg px-3 py-2 my-3 outline-blue-400"
          value={userId}
          onChange={onAuthorChange}
          >
          <option></option>
          {renderUsers}
        </select>
        <label className="text-slate-800 font-bold font-mono block mb-1">
          Content
        </label>
        <textarea
          className="border rounded-lg block w-full mb-5 px-3 py-2 outline-blue-400"
          value={content}
          onChange={onContentChange}
          placeholder="content..."
          rows={4}
        />

        <button
          className={` ${
            canSave ? `bg-blue-500` : `bg-blue-400`
          } p-4 rounded-lg my-4 w-full cursor-pointer`}
          type="submit"
          disabled={!canSave}
          onClick={onSaveClicked}
        >
          <span className="text-center block text-xl text-white font-semibold">
            Add Post
          </span>
        </button>
      </form>
    </div>
  );
};

export default FormPost;
