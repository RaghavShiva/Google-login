import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from 'react-router-dom';
import React from 'react'


const GoogleLogin = (props) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
		try {
			console.log(authResult)
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				const { email, name, image } = result.data.user;
				// console.log(result.data.user)
				const token = result.data.token;
				const obj = { email, name, token, image };
				localStorage.setItem('user-info', JSON.stringify(obj));
				navigate('/dashboard');
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.error('Error while Google Login...', e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<div className="App">
			<button onClick={googleLogin}>
				Sign in with Google
			</button>
		</div>
	);
};

export default GoogleLogin;