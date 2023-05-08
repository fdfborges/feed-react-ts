import { Post, PostType } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';
//author: {avatar_url:"", name:"", role:""}
//publishedAt: Date:
//content: String



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fdfborges.png',
      name: 'Felipe Borges',
      role: 'Engenheiro de Software @ILouise',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É sobre um projeto front-end completo para um feed! 🚀' },
      { type: 'link', content: 'https://github.com/fdfborges?tab=repositories' },
    ],
    publishedAt: new Date('2023-05-05:15:51:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator',
    },
    content: [
      { type: 'paragraph', content: 'Pessoal,' },
      { type: 'paragraph', content: 'Não percam a live da NLW que haverá em nosso canal na próxima quinta-feira!' },
      { type: 'link', content: '#NLW #RocketSeat' },
    ],
    publishedAt: new Date('2023-01-01:20:00:00'),
  },
]



export function App() {


  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return(
              <Post 
              key={post.id}
              post={post}
              />
            )
            
          })}
          

        </main>
      </div>
    </div>
  )
}


