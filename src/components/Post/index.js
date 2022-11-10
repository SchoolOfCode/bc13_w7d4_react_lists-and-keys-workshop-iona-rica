import React from 'react';

import './index.css';

function Post({title, author, date, text}) {
  return <article>
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h3>{date}</h3>
    <p>{text}</p>
    </article>;
}

export default Post;

