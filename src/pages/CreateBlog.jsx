import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./App.css";

function CreateBlog() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted successfully");
  };

  return (
    <>
      <div className="w-full p-4 px-12 mx-auto mt-12">
        <form
          className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Blog Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Set title"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Blog Content
            </label>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Blog Image
            </label>
            <input type="file" name="image" multiple accept="image/*" />
          </div>
          <div className="">
            <button className="bg-indigo-600 px-4 py-2 text-white rounded-md hover:bg-indigo-700">
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
