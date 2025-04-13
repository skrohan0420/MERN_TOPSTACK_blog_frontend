import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignUp = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError('Passwords do not match!');
			return;
		}

		setError('');
		console.log('Signup Info:', { name, email, password });
		// Add sign-up logic here
	};

	return (
		<Container className="mt-5">
			<Row className="justify-content-md-center">
				<Col xs={12} md={6}>
					<h2 className="mb-4 text-center">Sign Up</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSignUp}>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</Form.Group>

						<div className="d-grid">
							<Button variant="success" type="submit">
								Sign Up
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp;
