import React from 'react';

import './login.css';

function Login() {
	return (
		<main className="App">
			<div class='brand'>
				<a href='#' target='_blank'>
					<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png' />
				</a>
			</div>
			<div class='login'>
				<div class='login_title'>
					<span>Login to your account</span>
				</div>
				<div class='login_fields'>
					
						<div class='login_fields__user'>
							<div class='icon'>
								<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png' />
							</div>
							<input placeholder='Username' type='text' />
							<div class='validation'>
								<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png' />
							</div>

						</div>
						<div class='login_fields__password'>
							<div class='icon'>
								<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png' />
							</div>
							<input placeholder='Password' type='password' />
							<div class='validation'>
								<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png' />
							</div>
						</div>
						<div class='login_fields__submit'>
							<input type='submit' value='Log In' />
							<div class='forgot'>
								<a href='#'>Forgotten password?</a>
							</div>
						</div>
					
				</div>
				<div class='success'>
					<h2>Authentication Success</h2>
					<p>Welcome back</p>
				</div>
				<div class='disclaimer'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper laoreet placerat. Nullam semper auctor justo, rutrum posuere odio vulputate nec.</p>
				</div>
			</div>
			<div class='authent'>
				<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg' />
				<p>Authenticating...</p>
			</div>

		</main>
	)
}
export default Login;