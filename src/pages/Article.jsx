import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArticleComp from "../components/ArticleComp";

const Article = () => {
  return (
    <div>
      <Nav />
      <ArticleComp />
      <Footer color="red" />
    </div>
  );
};

export default Article;
