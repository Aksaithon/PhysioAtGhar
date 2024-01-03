import React from "react";
import BlogCarousel from "./BlogCarousel";
import "./Blog.css"

const Blog = () => {
  return (
    <div className="blog" >
      <div className="title_and_caption">
        <div className="title" >Catchy headline <span>.</span></div>
        <caption>The Ultimate List of Blogs Post Ideas</caption>
      </div>
      <BlogCarousel/>
      <div className="rectangle"></div>
    </div>
  );
};

export default Blog;
