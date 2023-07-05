import React, { useState, useEffect } from 'react'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import { Poll } from './components/Poll';
import styles from "./App.module.css";
import {api} from './api/index'

import './global.css' 


// const posts = [
//   {
//     id: 1,
//     author: {
//       avatarUrl: 'https://github.com/juniiorsaldanha.png',
//       name: 'Junior Saldanha',
//       role: 'Administrador'
//     },
//     content: [
//         { type: 'paragraph', content: 'Fala galeraa 👋' },
//         { type: 'paragraph', content: 'O cardápio da semana já está disponível no link abaixo: '},
//         { type: 'link', content: 'https://github.com/juniiorsaldanha' } ,
//     ],
//     publishedAt: new Date('2023-06-23 20:00:00'),
//   },
//   {
//     id: 2,
//     author: {
//       avatarUrl: 'https://github.com/esthiago.png',
//       name: 'Thiago Martins',
//       role: 'Estagiário'
//     },
//     content: [
//         { type: 'paragraph', content: 'Fala galeraa 👋' },
//         { type: 'paragraph', content: 'Votem na comida preferida de vocês, A vencedora será a comida escolhida para o jantar de Sexta-feira: '},
//         { type: 'pool', content: 'arroz' } ,
//     ],
//     publishedAt: new Date('2023-06-30 20:00:00'),
//   }
// ]

export function App() {

  const [posts, setPosts] = useState([])

    useEffect(() => {
      async function loadPost() {
        const response = await api.get('/post')

        setPosts(response.data)
      }

      loadPost()
    }, [])
    
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
                avatarUrl: post.user.urlAvatar,
                name: post.user.name,
                role: post.user.admin ? 'administrador' : 'Aluno'
              }

              const comments = post.Comment;

              const content = post.content;

              const publishedAt = post.created_at;
              return (
                <Post
                  key={post.id}
                  author={author}
                  content={content}
                  publishedAt={publishedAt}
                  comments={comments}
                />
              )
            })}
          </main>
        </div>
        <div className={styles.w}></div>
      </div>
  )
}

