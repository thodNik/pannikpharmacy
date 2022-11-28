import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./post.css";

const Post = () => {
  const [postById, setPostById] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get("https://tame-gold-cockatoo-slip.cyclic.app/posts/" + path)
      .then((response) => {
        setPostById(response.data);
      });
  }, [path]);

  return (
    <div id="post">
      <h2 className="post-title">{postById.title}</h2>
      <p className="post-content">{postById.content}</p>
    </div>
  );
};

export default Post;
