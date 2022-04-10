import React from 'react';
import Form from '../../components/Form';
import './styles.scss';

function Home() {
	return (
		<div id="home-container">
			<div className="left">
				<div className="container">
					<div className="title">
						<div>
							<h1>Bem vindo a LifeCare</h1>
							<h3>Pioneira em seguros de vida</h3>
						</div>
						<div className="button">
							<a href="">Ver mais</a>
						</div>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="form-container">
					<Form />
				</div>
			</div>
		</div>
	);
}

export default Home;
