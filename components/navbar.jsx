const Navbar = () => {
	return (
		<nav className="navbar">
			<a className="bt navbar_register" href="#" title="Cadastre-se para adotar um pet">Cadastre-se</a>

			<a className="navbar_logo" href="/" title="adotappet">
				<img className="navbar_logo" src="/images/logo.png" alt="Logo adotappet" />
				<strong>adotappet</strong>
			</a>

			<ul>
				<li><a className="link" href="#" title="Sobre a adotappet">Sobre nós</a></li>
				<li><a className="link" href="#" title="Adoção responsável">Adoção</a></li>
				<li><a className="link" href="#" title="Entre em contato conosco">Contato</a></li>
			</ul>

			<style jsx>{`
				.navbar {
					display: inline-block;
					padding: 30px 0;
					width: 100%;

					&_logo {
						display: inline-block;

						img {
							height: 35px;
						}

						strong {
							color: #3f3f3f;
							font-size: 23px;
							font-weight: 500;
							letter-spacing: -1px;
							margin-left: 5px;
							position: relative;
							top: -10px;
						}
					}

					ul {
						display: inline-block;
						position: relative;
    					top: -10px;

						li {
							display: inline-block;
							margin-left: 60px;
    						transition: all .2s ease;
						}

						img {
							height: 35px;
						}
					}

					&_register {
						float: right;
					}

					@media (max-width: 720px) {
						padding-top: 15px;

						ul {
							li {
								margin-left: 30px;
							}

							@media (max-width: 580px) {
								top: 3px;
								width: 100%;

								li {
									margin-left: 0;

									&:nth-child(2) {
										margin: 0 30px;
									}
								}
							}
						}
					}
				}
			`}</style>
		</nav>
	)
}

export default Navbar;
