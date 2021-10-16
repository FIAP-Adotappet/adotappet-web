import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
      <Link href="#">
        <a className={[styles.navbar_register, 'bt', 'bt_brown'].join(' ')} title="Cadastre-se para adotar um pet">Cadastre-se</a>
      </Link>

      <Link href="/">
        <a className={styles.navbar_logo} title="adotappet">
          <img src="/images/logo.png" alt="Logo adotappet" />
          <strong>adotappet</strong>
        </a>
      </Link>

			<ul>
				<li><a className="link" href="#" title="Sobre a adotappet">Sobre nós</a></li>
				<li><a className="link" href="#" title="Adoção responsável">Adoção</a></li>
				<li><a className="link" href="#" title="Entre em contato conosco">Contato</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;
