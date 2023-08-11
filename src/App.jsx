import { Post } from "./Post"
import './global.css' // importa o css diretamente
import { Header } from "./components/header" // importando o componente header
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() { // componente que será importado/repetítivel
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
          author = "Duda" // propriedades (props) do componente
          content = "Hello this is my post u guys"
        />
        <Post 
          author = "Maria"
          content = "This is a new post u.U"
        />
        </main>
      </div>
    </div> // não pode ter muitos componentes juntos sem um elemento em vota - div
  )
}
