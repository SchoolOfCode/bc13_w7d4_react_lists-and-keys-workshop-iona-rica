import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  //map trough posts
  //for each post return a post component
  //id = post.postId

  // const postTemplate = {
  //   postId: 0,
  //   title: "a title",
  //   date: "DD/MM/YY",
  //   author: "author",
  //   text: lorem.generateParagraphs(7),
  //   highlights: [
  //     lorem.generateWords(3),
  //     lorem.generateWords(3),
  //     lorem.generateWords(3),
  //   ],
  //   image: { link: "link", alt: "alt" },
  // };

  return (
  <Main>
    {posts.map((postObj) => {
    return <Post
   id={postObj.postId} title={postObj.title} date={postObj.date} author={postObj.author} text={postObj.text} image={postObj.image}></Post>
    })}

    </Main>
)
  }

export default Main;
