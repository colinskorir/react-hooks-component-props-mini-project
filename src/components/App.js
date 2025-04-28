import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/posts";

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q0rY4krTnCmx0PCVrtX3TQzQzgBXfNflng&s"
        about="A blog about React"
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;