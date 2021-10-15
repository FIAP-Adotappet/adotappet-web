import styles from '../styles/PetList.module.scss'

const PetList = ({ pets, error }) => {
	// Error on pets request
	if (error) {
		return (
			<p className="error"><span>Ops!</span> Ocorreu um erro inesperado, por favor tente novamente.</p>
		)
	}

	// Pet list
	return (
		<section id="pet_list" className={styles.list}>
			<h2>Pets para adoção</h2>

			{pets.map(pet => (
				<article className={pet.tipo == 'CACHORRO' ? styles.list_dog : styles.list_cat} key={pet.id}>
					<a href={'/pet/'+pet.id} title={pet.nome}>
						<img src={pet.imagem} alt={pet.nome} />
						<div>
							<img src={pet.sexo == 'MASCULINO' ? '/images/male.png' : '/images/female.png'} />
							<h1>{pet.nome}</h1>
							<small>{dateFormat(pet.dataNascimento)}</small>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
						</div>
					</a>
				</article>
			))}
		</section>
	)
}

const dateFormat = (date) => {
	const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric', })
	const format = (d) => dateTimeFormat.format(new Date(d))

	return 'Nasceu em ' + format(date)
}

export default PetList
