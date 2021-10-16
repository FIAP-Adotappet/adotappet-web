import Container from '/components/container'
import PetList from '/components/petList'
import styles from '../styles/Home.module.scss'
import axios from 'axios'
import Link from 'next/link'

const Home = ({ pets, error }) => (
	<Container>
		<section id="banner_home" className={styles.banner}>
			<img src="/images/ilt_banner.png" title="Ilustração humano e pets" />
			<div className={styles.banner_info}>
				<span>Faça parte!</span>
				<h1><strong>Doe seu lar,</strong><br /> adote um pet.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit aspernatur minima optio exercitationem, nostrum, ipsa natus ad necessitatibus! Quas!</p>
			</div>

			<div id="banner_filter" className={styles.banner_filters}>
        <Link href="#">
          <a className="bt" title="Filtrar por cachorros para adoção">Cachorros</a>
        </Link>
        <Link href="#">
          <a href="#" className="bt" title="Filtrar por gatos para adoção">Gatos</a>
        </Link>
			</div>
		</section>

		<PetList pets={pets} error={error} />
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
