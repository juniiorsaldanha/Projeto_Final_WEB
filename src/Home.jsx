import React, { useState, useEffect } from 'react'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import { Poll } from './components/Poll';
import styles from "./home.module.css";
import api from './api/index'

import './global.css' 

export default function Home() {

  const [posts, setPosts] = useState([])  

    async function loadPost() {
      const response = await api.get('/post',)

      setPosts(response.data)
    }

    useEffect(() => {
      loadPost()
    }, [])

    async function handleDelete(comment_id) {
      await api.delete('/post/comment', {
          data: {
              comment_id
          }
      });
      loadPost();
    }

    async function handleCreateNewComment(content, post_id) {
      await api.post('/post/comment', {
          post_id,
          content
      })
    }

    async function handleLiked(post_id){
      await api.post('/post/liked', {
        post_id
      })
      loadPost();
    }
    
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.Side__Container}>
          <Sidebar /> 
          <Poll />
        </div>
        
          <main>
            {posts.map(post => {
              const author = {
                post_id: post.id,
                avatarUrl: post.user.urlAvatar,
                name: post.user.username,
                role: post.user.admin ? 'administrador' : 'Aluno'
              }

              const comments = post.Comment;

              const likes = post.likes;

              const content = post.content;

              const publishedAt = post.created_at;
              return (
                <Post
                  key={post.id}
                  author={author}
                  content={content}
                  publishedAt={publishedAt}
                  comments={comments}
                  quantityLikes={likes}
                  onDelete={handleDelete}
                  onCreate={handleCreateNewComment}
                  onLiked={handleLiked}
                />
              )
            })}
          </main>
        </div>
        <div className={styles.w}></div>
      </div>
  )
}

