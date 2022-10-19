import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Pharmacy from "./Pharmacy";
import Newsletter from "./Newsletter";
import Blog from "./Blog";
import Terms from "./Terms";
import Post from "./Post";
import PostArea from "./PostArea";
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
