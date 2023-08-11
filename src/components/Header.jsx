import styles from './header.module.css' // importando o css pra ser aplicado no componente
import igniteLogo from '../images/igniteLogo.svg'


export function Header() {
    return (
        <div>
            <header className={styles.header}> {/* utiliza-se styles.nomedodoc para colocar o estilo na tag html */}
                <img src={igniteLogo} alt='logotipo' />
            </header>
        </div>
    )
}