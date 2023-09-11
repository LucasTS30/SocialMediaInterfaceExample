import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasTS30.png',
      name: 'Lucas Tavares de Souza',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galeraa!'},
      { type: 'paragraph', content: 'Tudo bem com vocês? Hoje venho trazendo novidades'},
      { type: 'link', content: 'teste.teste/teste'},
    ],
    publishedAt: new Date('2023-07-23 09:32:12'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQGTHyzSgZXX3Q/profile-displayphoto-shrink_200_200/0/1686002263047?e=1695859200&v=beta&t=oeAnQnvBmh1U8-mrBjpuEPpb0HZPbB7nKipD4YrpsC8',
      name: 'Viviam de Melo Josviack',
      role: 'Designer Gráfico'
    },
    content: [
      { type: 'paragraph', content: 'Oi, gente!'},
      { type: 'paragraph', content: 'Tudo bem com vocês? Hoje venho trazendo novidades'},
      { type: 'link', content: 'teste.teste/teste'},
    ],
    publishedAt: new Date('2023-07-23 10:32:12'),
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
              />)
          })}
        </main>
      </div>
    </div>
    
  )
}


