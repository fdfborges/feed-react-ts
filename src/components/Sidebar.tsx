import {PencilLine} from 'phosphor-react'


import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://media.licdn.com/dms/image/D4D16AQFbiWFDBj73Xg/profile-displaybackgroundimage-shrink_350_1400/0/1682352871028?e=1688601600&v=beta&t=QngJcecLj4oPX0DAgerdIKbtU2nA02LHjOJmUyIfLuw" alt="" 
            />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/129974116?v=4'/>
                <strong>Felipe Borges</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                <PencilLine size="20"/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
        );
}