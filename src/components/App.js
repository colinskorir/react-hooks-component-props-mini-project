import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App({ name, image, about, posts }) {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <main>
        <ArticleList posts={posts} />
      </main>
    </div>
  );
}

export default App;
