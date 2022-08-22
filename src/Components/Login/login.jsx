import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Swal from 'sweetalert2';
import { auth, getUser } from './services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	//for redirect to another page
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
			const url = "http://localhost:5500/api/login";
			axios
			.post(url, {username, password})
			.then((res) => {
				Swal.fire(
					'Login success!',
					'Thank you for login.',
					'success'
				)
				auth(res, ()=>{navigate("/")})
			})
			.catch((err) => {
				Swal.fire(
					'Sorry for a problem!',
					err.response.data.error,
					'error'
				)
			})
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
