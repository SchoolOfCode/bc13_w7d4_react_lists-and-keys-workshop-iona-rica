import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

//loop over posts state
//for each post return post component

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {posts.map(({ postId, title, author, text, highlights, image, date }) => {
        return (
          <Post
            key={postId}
            title={title}
            author={author}
            text={text}
            highlights={highlights}
            image={image}
            date={date}
          />
        );
      })}
    </main>
  );
}

export default Main;
