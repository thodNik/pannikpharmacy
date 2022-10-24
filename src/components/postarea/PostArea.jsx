import React, { useState } from "react";
import axios from "axios";
import "./postarea.css";

function PostArea() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleClick = () => {
    axios
      .post("https://pharmacyserverpannik.herokuapp.com/createPost", {
        title: postTitle,
        content: postContent,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setPostTitle("");
    setPostContent("");
  };

  return (
    <div id="compose">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Title
        </label>
        <input
          onChange={(event) => {
            setPostTitle(event.target.value);
          }}
          type="text"
          class="form-control shadow-none"
          id="exampleFormControlInput1"
          value={postTitle}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Content
        </label>
        <textarea
          onChange={(event) => {
            setPostContent(event.target.value);
          }}
          class="form-control shadow-none"
          id="exampleFormControlTextarea1"
          rows="10"
          value={postContent}
        ></textarea>
        <button
          onClick={handleClick}
          class="btn btn-primary"
          type="submit"
          name="button"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default PostArea;
