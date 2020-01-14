import React from 'react';
import { Link } from "react-router-dom"
import Style from 'style-it';

function Login() {
	return (
		<main className="App" >
			<Style>
          {`
           @import url(https://fonts.googleapis.com/css?family=Gudea:400,700);
		   *, *::before, *::after {
			 box-sizing: content-box;
		   }
		   body {
			 -webkit-perspective: 800px;
					 perspective: 800px;
			 height: 100vh;
			 margin: 0;
			 overflow: hidden;
			 font-family: 'Gudea', sans-serif;
			 background: #EA5C54;
			 /* Old browsers */
			 /* FF3.6+ */
			 /* Chrome,Safari4+ */
			 /* Chrome10+,Safari5.1+ */
			 /* Opera 11.10+ */
			 /* IE10+ */
			 background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);
			 /* W3C */
			 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EA5C54 ', endColorstr='#bb6dec',GradientType=1 );
			 /* IE6-9 fallback on horizontal gradient */
		   }
		   body ::-webkit-input-placeholder {
			 color: #4E546D;
		   }
		   body .authent {
			 display: none;
			 background: #35394a;
			 /* Old browsers */
			 /* FF3.6+ */
			 /* Chrome,Safari4+ */
			 /* Chrome10+,Safari5.1+ */
			 /* Opera 11.10+ */
			 /* IE10+ */
			 background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
			 /* W3C */
			 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#35394a', endColorstr='#1f222e',GradientType=1 );
			 /* IE6-9 fallback on horizontal gradient */
			 position: absolute;
			 left: 0;
			 right: 90px;
			 margin: auto;
			 width: 100px;
			 color: white;
			 text-transform: uppercase;
			 letter-spacing: 1px;
			 text-align: center;
			 padding: 20px 70px;
			 top: 200px;
			 bottom: 0;
			 height: 70px;
			 opacity: 0;
		   }
		   body .authent p {
			 text-align: center;
			 color: white;
		   }
		   body .success {
			 display: none;
			 color: #d5d8e2;
		   }
		   body .success p {
			 font-size: 14px;
		   }
		   body p {
			 color: #5B5E6F;
			 font-size: 10px;
			 text-align: left;
		   }
		   body .testtwo {
			 left: -320px !important;
		   }
		   body .test {
			 box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
			 pointer-events: none;
			 top: -100px !important;
			 -webkit-transform: rotateX(70deg) scale(0.8) !important;
					 transform: rotateX(70deg) scale(0.8) !important;
			 opacity: .6 !important;
			 -webkit-filter: blur(1px);
					 filter: blur(1px);
		   }
		   body .login {
			 opacity: 1;
			 top: 20px;
			 -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, 0.85);
			 transition-property: opacity,box-shadow,top,left,-webkit-transform;
			 transition-property: transform,opacity,box-shadow,top,left;
			 transition-property: transform,opacity,box-shadow,top,left,-webkit-transform;
			 transition-duration: .5s;
			 -webkit-transform-origin: 161px 100%;
					 transform-origin: 161px 100%;
			 -webkit-transform: rotateX(0deg);
					 transform: rotateX(0deg);
			 position: relative;
			 width: 270px;
			 /* border-top: 2px solid #D8312A; */
			 border-radius: 10px;
			 height: 370px;
			 position: absolute;
			 left: 0;
			 right: 0;
			 margin: auto;
			 top: 0;
			 bottom: 0;
			 padding: 100px 40px 40px 40px;
			 background: #35394a;
			 /* Old browsers */
			 /* FF3.6+ */
			 /* Chrome,Safari4+ */
			 /* Chrome10+,Safari5.1+ */
			 /* Opera 11.10+ */
			 /* IE10+ */
			 background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
			 /* W3C */
			 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#35394a', endColorstr='#1f222e',GradientType=1 );
			 /* IE6-9 fallback on horizontal gradient */
		   }
		   body .login .validation {
			 position: absolute;
			 z-index: 1;
			 right: 10px;
			 top: 6px;
			 opacity: 0;
		   }
		   body .login .disclaimer {
			 position: absolute;
			 bottom: 20px;
			 left: 35px;
			 width: 270px;
		   }
		   body .login_title {
			 color: #afb1be;
			 height: 60px;
			 text-align: left;
			 font-size: 16px;
		   }
		   body .login_fields {
			 height: 208px;
			 position: absolute;
			 left: 0;
		   }
		   body .login_fields .icon {
			 position: absolute;
			 z-index: 1;
			 left: 36px;
			 top: 8px;
			 opacity: .5;
		   }
		   body .login_fields input[type='password'] {
			 color: #DC6180 !important;
		   }
		   body .login_fields input[type='text'], body .login_fields input[type='password'] {
			 color: #afb1be;
			 width: 220px;
			 margin-top: -2px;
			 background: #32364a;
			 left: 0;
			 padding: 10px 65px;
			 border-top: 2px solid #393d52;
			 border-bottom: 2px solid #393d52;
			 border-right: none;
			 border-left: none;
			 outline: none;
			 font-family: 'Gudea', sans-serif;
			 box-shadow: none;
		   }
		   body .login_fields__user, body .login_fields__password {
			 position: relative;
		   }
		   body .login_fields__submit {
			 position: relative;
			 top: 35px;
			 left: 0;
			 width: 80%;
			 right: 0;
			 margin: auto;
		   }
		   body .login_fields__submit .forgot {
			 float: right;
			 font-size: 10px;
			 margin-top: 11px;
			 text-decoration: underline;
		   }
		   body .login_fields__submit .forgot a {
			 color: #606479;
		   }
		   body .login_fields__submit input {
			 border-radius: 50px;
			 background: transparent;
			 padding: 10px 50px;
			 border: 2px solid #DC6180;
			 color: #DC6180;
			 text-transform: uppercase;
			 font-size: 11px;
			 transition-property: background,color;
			 transition-duration: .2s;
		   }
		   body .login_fields__submit input:focus {
			 box-shadow: none;
			 outline: none;
		   }
		   body .login_fields__submit input:hover {
			 color: white;
			 background: #DC6180;
			 cursor: pointer;
			 transition-property: background,color;
			 transition-duration: .2s;
		   }
		   
		   /* Color Schemes */
		   .love {
			 position: absolute;
			 right: 20px;
			 bottom: 0px;
			 font-size: 11px;
			 font-weight: normal;
		   }
		   .love p {
			 color: white;
			 font-weight: normal;
			 font-family: 'Open Sans', sans-serif;
		   }
		   .love a {
			 color: white;
			 font-weight: 700;
			 text-decoration: none;
		   }
		   .love img {
			 position: relative;
			 top: 3px;
			 margin: 0px 4px;
			 width: 10px;
		   }
		   
		   .brand {
			 position: absolute;
			 left: 20px;
			 bottom: 14px;
		   }
		   .brand img {
			 width: 30px;
		   }
		   
         `}
        </Style>
			<div class='brand' >
				<a href='#' target='_blank'>
					<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png' />
				</a>
			</div>
			<div className='login' >
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
						<Link to='/admin'>
							<input type='submit' value='Log In' />
						</Link>
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