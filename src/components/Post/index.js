import React from "react";

import "./index.css";

function Post({ title, author, text, highlights, image, date }) {
  return (
    <article className="post">
      <img className="image" src={image.link} alt={image.alt} />
      <h1>{title}</h1>
      <h3>
        {author} - {date}
      </h3>
      {highlights.map((highlight) => {
        return <li>{highlight}</li>;
      })}
      <p>{text}</p>
    </article>
  );
}

export default Post;
