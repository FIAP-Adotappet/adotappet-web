import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<a className={[styles.navbar_register, 'bt', 'bt_brown'].join(' ')} href="#" title="Cadastre-se para adotar um pet">Cadastre-se</a>

			<a className={styles.navbar_logo} href="/" title="adotappet">
				<img src="/images/logo.png" alt="Logo adotappet" />
				<strong>adotappet</strong>
			</a>

			<ul>
				<li><a className="link" href="#" title="Sobre a adotappet">Sobre nós</a></li>
				<li><a className="link" href="#" title="Adoção responsável">Adoção</a></li>
				<li><a className="link" href="#" title="Entre em contato conosco">Contato</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;
