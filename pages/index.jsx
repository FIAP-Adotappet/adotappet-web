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

			<section className={styles.list}>
				<h2>Pets para adoção</h2>

				<article className={styles.list_dog}>
					<img src="/dog.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/male.png" />
						<h1>Dino</h1>
						<small>3 anos</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_cat}>
					<img src="/cat.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/female.png" />
						<h1>Amendoim</h1>
						<small>1 ano</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_cat}>
					<img src="/cat.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/female.png" />
						<h1>Amendoim</h1>
						<small>1 ano</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_dog}>
					<img src="/dog.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/male.png" />
						<h1>Dino</h1>
						<small>3 anos</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_dog}>
					<img src="/dog.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/male.png" />
						<h1>Dino</h1>
						<small>3 anos</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_cat}>
					<img src="/cat.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/female.png" />
						<h1>Amendoim</h1>
						<small>1 ano</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_cat}>
					<img src="/cat.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/female.png" />
						<h1>Amendoim</h1>
						<small>1 ano</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
				<article className={styles.list_dog}>
					<img src="/dog.jpg" alt="nome_do_pet" />
					<div>
						<img src="/images/male.png" />
						<h1>Dino</h1>
						<small>3 anos</small>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.</p>
					</div>
				</article>
			</section>
		</Container>
	)
}
