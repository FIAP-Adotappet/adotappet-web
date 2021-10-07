import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => {
	return(
		<div className="container">
			{/* metatags */}
			<Head>
				<title>adotappet</title>

				<meta name="description" content="Doe seu lar, adote um pet" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#fb7e2c" />
				<meta name="msapplication-TileColor" content="#fb7e2c" />

				<link rel="icon" href="/images/favicon.ico" />
			</Head>

			{/* navbar*/}
			<Navbar />

			{/* app container*/}
			<main className="content">
				{props.children}
			</main>

			<footer>
				<p>adotappet | Grupo 9 @ FIAP</p>
			</footer>

			<style jsx>{`
				.container {
					display: inline-block;
					left: 50%;
					min-width: 450px;
					max-width: 1280px;
					position: relative;
					transform: translateX(-50%);
					width: calc(100% - 60px);

					@media (max-width: 480px) {
						width: calc(100% - 30px);
					}

					footer {
						border-top: 1px #eee solid;
						font-size: 14px;
						margin-top: 60px;
						padding: 7px 15px;
						text-align: center;
					}
				}
			`}</style>
		</div>
	)
}

export default Layout;
