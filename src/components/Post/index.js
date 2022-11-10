import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>
    <h3>{props.date}</h3>
    <p>{props.text}</p>
    </article>;
}

export default Post;
