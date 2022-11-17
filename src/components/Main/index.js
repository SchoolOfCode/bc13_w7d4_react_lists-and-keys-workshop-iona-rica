import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  //map trough posts
  //for each post return a post component
  //id = post.postId

  return posts.map((postObj) => {
    return (
      <Post
        key={postObj.postId}
        title={postObj.title}
        date={postObj.date}
        author={postObj.author}
        text={postObj.text}
        image={postObj.image}
        highlights={postObj.highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li>;
        })}
      />
    );
  });
}

export default Main;
