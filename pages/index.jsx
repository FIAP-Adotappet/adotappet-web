import Container from '/components/container'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<Container>
			<section className={styles.banner}>
				<img src="/images/ilt_banner.png" title="Ilustração humano e pets" />
				<div>
					<span>Faça parte!</span>
					<h1><strong>Doe seu lar,</strong><br />adote um pet.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit aspernatur minima optio exercitationem, nostrum, ipsa natus ad necessitatibus! Quas!</p>
				</div>

				<div className={styles.banner_filters}>
					<a href className="bt" title="Filtrar por cachorros para adoção">Cachorros</a>
					<a href className="bt" title="Filtrar por gatos para adoção">Gatos</a>
				</div>
			</section>
		</Container>
	)
}
