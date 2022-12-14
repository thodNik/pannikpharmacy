import React, { useState, useEffect } from "react";
import pic from "../../assets/pannikpic.jpg";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://tame-gold-cockatoo-slip.cyclic.app/getPosts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <section id="blog">
      <div className="top-container">
        <img className="panpic" src={pic} alt="pan nik" />
        <h3>Blog του Παντελή Νικολαΐδη</h3>
        <p>
          Ενημερωθείτε από τον φαρμακοποιό Παντελή Νικολαΐδη, για
          <br />
          δημοφιλή θέματα που αφορούν την υγεία την δική σας
          <br />
          και της οικογένειάς σας.
        </p>
      </div>

      <div className="posts-container">
        <hr className="top-hr" />
        <hr className="bot-hr" />
        <ul className="posts-list">
          {posts.map((post) => {
            return (
              <li>
                <h4>{post.title}</h4>
                <p className="post par">{post.content}</p>
                <a className="more" href={`/post/${post._id}`}>
                  ...Περισσότερα
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
