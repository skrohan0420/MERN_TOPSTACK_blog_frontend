import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { GoEye, GoEyeClosed } from "react-icons/go";

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<Container className="mt-5">
			<Row className="justify-content-md-center">
				<Col xs={12} md={6}>
					<h2 className="mb-4 text-center">Login</h2>
					<Form onSubmit={handleLogin}>
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
							<div className="position-relative">
								<Form.Control
									type={showPassword ? 'text' : 'password'}
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
									<span
										onClick={() => setShowPassword(!showPassword)}
										className="position-absolute top-50 end-0 translate-middle-y me-3"
										style={{ cursor: 'pointer' }}
									>
										{showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
									</span>
							</div>
						</Form.Group>

						<div className="d-grid">
							<Button variant="primary" type="submit">
								Login
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;
