import './global.css' // importa o css diretamente
import styles from './App.module.css'
import { Header } from "./components/header" // importando o componente header
import { Sidebar } from "./components/Sidebar"
import { Post } from './components/Post'

export function App() { // componente que será importado/repetítivel
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post />
        </main>
      </div>
    </div> // não pode ter muitos componentes juntos sem um elemento em vota - div
  )
}
