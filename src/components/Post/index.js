import React from 'react';

import './index.css';

function Post({ title, author, date, text, image, highlights }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{date}</h3>
      <p>{text}</p>
      <img
        src={image.link}
        alt={image.alt}
        style={{ width: "400px", height: "auto" }}
      ></img>
      <ul>{highlights}</ul>
    </article>
  );
}

export default Post;
