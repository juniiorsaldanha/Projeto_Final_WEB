import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import { Poll } from './components/Poll';
import styles from "./App.module.css";

import './global.css' 

import React from 'react';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/juniiorsaldanha.png',
      name: 'Junior Saldanha',
      role: 'Administrador'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'O cardápio da semana já está disponível no link abaixo: '},
        { type: 'link', content: 'https://github.com/juniiorsaldanha' } ,
    ],
    publishedAt: new Date('2023-06-23 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/esthiago.png',
      name: 'Thiago Martins',
      role: 'Estagiário'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Votem na comida preferida de vocês, A vencedora será a comida escolhida para o jantar de Sexta-feira: '},
        { type: 'pool', content: 'arroz' } ,
    ],
    publishedAt: new Date('2023-06-30 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

