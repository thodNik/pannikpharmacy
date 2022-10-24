import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Pharmacy from "./pharmacy/Pharmacy";
import Newsletter from "./newsletter/Newsletter";
import Blog from "./blog/Blog";
import Terms from "./terms/Terms";
import Post from "./post/Post";
import PostArea from "./postarea/PostArea";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Newsletter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/compose" element={<PostArea />} />
        <Route path="/post/:postId" element={<Post />} />
       </Routes>
      <Footer />
    </div>
  );
};

export default App;
