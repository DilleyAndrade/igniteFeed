import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

const posts =[
  {
    id:1,
    author:{
      avatarUrl:'https://www.github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO da Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW'},
      {type: 'link', content:'Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO da Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW'},
      {type: 'link', content:'Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar />
        <main>
         {posts.map((post)=>(
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
         ))}
        </main>
      </div>
    </>
  )
}

export default App
