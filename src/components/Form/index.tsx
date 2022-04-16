import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

function Form() {
	const [isLogin, setLogin] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [document, setDocument] = useState('');
	const [birthdate, setBirthDate] = useState('');
	const [phone, setPhone] = useState('');

	useEffect(() => {}, [name, email, document, birthdate, phone]);

	const handleSubmit = () => {
		console.log('submit');
		console.log(name);
		console.log(email);
		console.log(document);
		console.log(birthdate);
		console.log(phone);
	};

	return (
		<div className="form">
			<div className="title">
				<h1> {isLogin ? 'Entrar' : 'Cadastre-se'}</h1>
				<p>
					{isLogin
						? ''
						: 'E tenha acesso aos plano que mais se encaixam ao seu perfil'}
				</p>
			</div>
			<div className="input-container">
				{!isLogin ? (
					<>
						<div className="input">
							<label>Nome Completo</label>
							<input
								type="text"
								placeholder="Nome Completo"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>Email</label>
							<input
								type="text"
								placeholder="Email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>CPF</label>
							<InputMask
								type="text"
								placeholder="xxx.xxx.xxx-xx"
								mask="999.999.999-99"
								onChange={(e) => {
									setDocument(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>Data de nascimento</label>
							<InputMask
								type="text"
								placeholder="dd/mm/yyyy"
								mask="99/99/9999"
								onChange={(e) => {
									setBirthDate(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>Celular</label>
							<InputMask
								type="text"
								placeholder="(00) 00000-0000"
								mask="(99)99999-9999"
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>Senha</label>
							<input
								type="password"
								placeholder="·········"
								maxLength={15}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
					</>
				) : (
					<>
						<div className="input">
							<label>Email</label>
							<input
								type="text"
								placeholder="Email"
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label>Senha</label>
							<input
								type="password"
								placeholder="·········"
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
					</>
				)}

				<div className="button-container">
					<button
						onClick={() => {
							handleSubmit();
						}}
					>
						Enviar
					</button>

					<p>
						{isLogin ? 'Ainda não é cliente? Clique ' : 'Já é cliente? Clique '}
						<a
							className="highlight"
							onClick={() => {
								setLogin(!isLogin);
							}}
						>
							Aqui
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Form;
