import styles from './SideBar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
        <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className={styles.profile}>
            <Avatar src="https://github.com/dilleyandrade.png" />
            <strong>Dilley Andrade</strong>
            <span>Fullstack Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}
