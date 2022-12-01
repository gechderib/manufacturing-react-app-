import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const FormPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  return (
    <div>
      <form>
        <label className="text-slate-800 font-bold font-mono block mb-1">
          Title
        </label>
        <input
          className="border rounded-lg block mb-1 px-3 py-2 w-full "
          value={title}
          onChange={onTitleChange}
          placeholder="title..."
        />
        <label className="text-slate-800 font-bold font-mono block mb-1">
          Content
        </label>
        <textarea
          className="border rounded-lg block w-full mb-5 px-3 py-2"
          value={content}
          onChange={onContentChange}
          placeholder="content..."
          rows={4}
        />

        <div
          className="bg-blue-500 hover:bg-blue-400 p-4 rounded-lg cursor-pointer my-4"
          onClick={() => {}}
        >
          <span className="text-center block text-xl text-white hover:text-blue-100 font-semibold">
            Add Post
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
