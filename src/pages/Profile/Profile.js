import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const fetchUserProfile = async () => {


		try {
			// let response = await fetch('https://example.com/api/profile', {
			// 	method: 'GET',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// });
			// response = await response.json();
			// if (response.success) {
			// 	setName(response.data.name);
			// 	setEmail(response.data.email);
			// 	setPassword(response.data.password);
			// } else {
			// 	toast.error('Failed to fetch user profile data.');
			// }


			setName('John Doe');
			setEmail('Jhon@gmail.com')
			setPassword('12345678');
		} catch (error) {
			console.error('Error fetching user profile:', error);
			toast.error('Failed to fetch user profile data.');
		}

	}

	useEffect(() => {
		fetchUserProfile();

	}, [])




	const handleUpdate = (e) => {
		e.preventDefault();

		if (!name) return toast.warning('Name is required!');
		if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return toast.warning('Valid email is required!');
		if (!password) return toast.warning('Password is required!');

		try {

			// let response = await fetch('https://example.com/api/profile', {
			// 	method: 'PUT',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(
			// 		{
			// 			name,
			// 			email,
			// 			password
			// 		}
			// 	),
			// });
			// response = await response.json();
			if (true) {
				toast.success('Profile updated successfully!');
			} else {
				toast.error('Failed to update profile.');
			}
		} catch (error) {
			console.error('Error updating profile:', error);
			toast.error('Failed to update profile.');
		}
	};

	return (
		<Container className="mt-5 profile-container">
			<ToastContainer />
			<Row className="justify-content-center">
				<Col md={6}>
					<h3 className="text-center mb-4">My Profile</h3>
					<Form onSubmit={handleUpdate}>
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formPassword">
							<Form.Label>Password</Form.Label>
							<InputGroup>
								<Form.Control
									type={showPassword ? 'text' : 'password'}
									placeholder="Enter new password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Button
									variant="outline-secondary"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <GoEyeClosed /> : <GoEye />}
								</Button>
							</InputGroup>
						</Form.Group>

						<Button type="submit" variant="primary" className="w-100">
							Update Profile
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
