import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>

					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="profile" element={<Profile />} />
					</Route>
					
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />




				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
