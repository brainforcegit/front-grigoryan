import React from "react";

const PostCard = ({ post, onClick }) => {
  const { title, text, tags, autor, img, img_2x, date, views } = post;

  return (
    <div className="post-card" onClick={onClick}>
      <div className="post-image">
        <img src={img} srcSet={`${img_2x} 2x`} alt={title}/>
      </div>
      <div className="post-content">
        <span className="post-tag">{tags}</span>
        <h3 className="post-title">{title}</h3>
        <div className="post-meta">
          <span className="post-author">{autor}</span>
          <span className="post-date">{date}</span>
          <span className="post-views">{views} views</span>
        </div>
        <p className="post-text">{text}</p>

      </div>

    </div>
  );
};

export default PostCard;
