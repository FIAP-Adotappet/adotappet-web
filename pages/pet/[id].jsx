import Container from '../../components/container'
import styles from '../../styles/Pet.module.scss'
import { useRouter } from 'next/router'

export default function PetItem() {
	const router = useRouter()
	const {id} = router.query

	return (
		<Container>
			<section className={styles.highlight}>
				<img src="/dog.jpg" alt="nome_do_pet" />
				<div>
					<img src="/images/male.png" />
					<h1>Dino</h1>
					<small>3 anos</small>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est et tempore. Doloribus cupiditate laudantium obcaecati accusantium accusamus, possimus similique quia blanditiis deleniti qui unde ullam facilis, ad repellat iste, culpa nesciunt, minus. Eaque, omnis, iure! Eveniet culpa at, nostrum reprehenderit. Aliquam dolorem delectus ratione labore dignissimos, mollitia dolore, voluptates.</p>

					<a className="bt" href title="Tenho interesse em adotar">Tenho interesse no Dino!</a>
				</div>
			</section>

			<a className={[styles.bt_back, 'bt', 'bt_brown'].join(' ')} href="/" title="Visualizar lista">Voltar e visualizar outros pets</a>
		</Container>
	)
}
