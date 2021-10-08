import Container from '/components/container'
import PetList from '/components/petList'
import styles from '../styles/Home.module.scss'
import axios from 'axios'

const Home = ({ pets, error }) => (
	<Container>
		<section className={styles.banner}>
			<img src="/images/ilt_banner.png" title="Ilustração humano e pets" />
			<div className={styles.banner_info}>
				<span>Faça parte!</span>
				<h1><strong>Doe seu lar,</strong><br /> adote um pet.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit aspernatur minima optio exercitationem, nostrum, ipsa natus ad necessitatibus! Quas!</p>
			</div>

			<div className={styles.banner_filters}>
				<a href="#" className="bt" title="Filtrar por cachorros para adoção">Cachorros</a>
				<a href="#" className="bt" title="Filtrar por gatos para adoção">Gatos</a>
			</div>
		</section>

		<section className={styles.list}>
			<h2>Pets para adoção</h2>

			<PetList pets={pets} error={error} />
		</section>
	</Container>
)

Home.getInitialProps = async () => {
	try {
		const res = await axios.get('https://adotappet-api.herokuapp.com/api/pets');
		const pets = res.data;

		return { pets };
	} catch (error) {
		return { error };
	}
}

export default Home
