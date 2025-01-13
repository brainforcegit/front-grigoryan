import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostPopup from "../Shared/PostPopup";
import "../../styles/Posts.css"

const PostList = () => {
  const [posts, setPosts] = useState([]); // Состояние для списка постов
  const [error, setError] = useState(null); // Состояние для ошибок
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [selectedPost, setSelectedPost] = useState(null);

  // Выполняем запрос к API при монтировании компонента
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://cloud.codesupply.co/endpoint/react/data.json");
        if (!response.ok) throw new Error("Ошибка при загрузке данных");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  const handleCardClick = (post) => {
    setSelectedPost(post); // Устанавливаем выбранный пост
  };

  // Обработчик для закрытия попапа
  const handleClosePopup = () => {
    setSelectedPost(null); // Убираем выбранный пост
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} onClick={() => handleCardClick(post)} />
      ))}
      {selectedPost && (
        <PostPopup post={selectedPost} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default PostList;
