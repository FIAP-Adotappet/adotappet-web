import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => {
	return(
		<div>
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
			<div className="container">
				{props.children}
			</div>
		</div>

	);
}

export default Layout;
