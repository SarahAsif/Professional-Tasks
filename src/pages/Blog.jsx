import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import First from "../components/blog_first";
import Second from "../components/blog_second";

const Blog = () => {
  return (
    <div>
      <Nav />
      <First />
      <Second />
      <Footer />
    </div>
  );
};

export default Blog;
