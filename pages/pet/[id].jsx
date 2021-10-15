import Container from '../../components/container'
import styles from '../../styles/Pet.module.scss'
import axios from 'axios'

axios.get('https://adotappet-api.herokuapp.com/api/pets/34').then(({ data }) => {
  console.log('oi', data)
})

const PetItem = ({ pet, error }) => {
	if (error) {
		return (
			<Container>
				<p className="error"><span>Ops!</span> Ocorreu um erro inesperado, por favor tente novamente.</p>
			</Container>
		)
	}

	return (
		<Container>
			<section id="detail" className={styles.highlight}>
				<img src={pet.imagem} alt={pet.nome} />
				<div>
					<img src={pet.sexo == 'MASCULINO' ? '/images/male.png' : '/images/female.png'} />
					<h1>{pet.nome}</h1>
					<small>{dateFormat(pet.dataNascimento)}</small>

					<p><strong>Porte: </strong>{pet.porte}</p>
					<p><strong>Raça: </strong>{pet.raca}</p>
					<br />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est et tempore. Doloribus cupiditate laudantium obcaecati accusantium accusamus, possimus similique quia blanditiis deleniti qui unde ullam facilis, ad repellat iste, culpa nesciunt, minus. Eaque, omnis, iure! Eveniet culpa at, nostrum reprehenderit. Aliquam dolorem delectus ratione labore dignissimos, mollitia dolore, voluptates.</p>

					<a id="bt_action" className="bt" href="#" title="Tenho interesse em adotar">{'Tenho interesse n' + (pet.sexo == 'MASCULINO' ? 'o ' : 'a ') + pet.nome + '!'}</a>
				</div>
			</section>

			<a id="bt_back" className={[styles.bt_back, 'bt', 'bt_brown'].join(' ')} href="/" title="Visualizar lista">Voltar e visualizar outros pets</a>
		</Container>
	)
}

PetItem.getInitialProps = async ({ query }) => {
	try {
		const res = await axios.get('https://adotappet-api.herokuapp.com/api/pets/' + query.id);
		const pet = res.data;

		return { pet };
	} catch (error) {
		return { error };
	}
}

const dateFormat = (date) => {
	const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric', })
	const format = (d) => dateTimeFormat.format(new Date(d))

	return 'Nasceu em ' + format(date)
}

export default PetItem
