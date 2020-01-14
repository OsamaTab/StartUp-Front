import React from 'react';
import Style from 'style-it';
import $ from 'jquery';



class Header extends React.Component {
  // componentDidMount(){
  //   $(document).ready(function () {
  //     // Transition effect for navbar 
  //     $(window).scroll(function () {
  //       // checks if window is scrolled more than 500px, adds/removes solid class
  //       if ($(this).scrollTop() > 500) {
  //         $('.navbar').addClass('solid');
  //       } else {
  //         $('.navbar').removeClass('solid');
  //       }
  //     });
  //   });
  }
  render(){
  return (
    <div>
      <Style>
        {`
        .image {
          background-color: #490d40;
          background: url(https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-South-Iceland3.jpg) no-repeat center center;
          background-size: cover;
          height: 570px;
          margin-top: -20px;
       }
        .image .heading {
          color: white;
          text-align: center;
          padding-top: 200px;
       }
        .image p {
          text-align: center;
          padding: 20px 60px;
       }
        .image p .btn {
          background-color: transparent;
          color: white;
          border: 1px solid white;
          padding: 10px;
          font-size: 1.2em;
       }
        .image p .btn:hover {
          color: #c57ed3;
          border-color: #c57ed3;
       }
        .navbar {
          height: 80px;
          background-color: transparent;
          border: none;
          color: white;
          z-index: 100;
          transition: background-color 1s ease 0s;
       }
        .navbar-default .navbar-brand {
          margin-top: 10px;
          color: white;
       }
        .navbar-default .navbar-brand:hover {
          color: #c57ed3;
          border: 1px solid #c57ed3;
       }
        .navbar-default .navbar-nav > li > a {
          color: white;
          margin: 10px 5px 5px 5px;
       }
        .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:active, .navbar-default .navbar-nav > li > a:focus {
          color: #c57ed3;
          border: 1px solid #c57ed3;
       }
        .navbar-default .navbar-nav > li > a:visited {
          color: #c57ed3;
          text-decoration: none;
       }
        .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
          background-color: transparent;
          color: #c57ed3;
       }
        .navbar-default .navbar-toggle {
          border-color: #c57ed3;
       }
        .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
          background-color: #490d40;
       }
        .navbar-default .navbar-toggle .icon-bar {
          color: #c57ed3;
          background-color: #c57ed3;
       }
        .navbar-default .navbar-collapse.collapse.in ul {
          background-color: #490d40;
       }
       /* Solid class attached on scroll past first section */
        .navbar.solid {
          background-color: #490d40;
          transition: background-color 1s ease 0s;
          box-shadow: 0 0 4px grey;
       }
        .navbar.solid .navbar-brand {
          color: #c57ed3;
          transition: color 1s ease 0s;
       }
        .navbar.solid .navbar-nav > li > a {
          color: #c57ed3;
          transition: color 1s ease 0s;
       }
        .about {
          background-color: #c57ed3;
          color: #490d40;
          height: 600px;
          text-align: center;
          margin-top: -20px;
       }
        .about h2 {
          padding-top: 220px;
       }
        .about p {
          padding: 20px 80px;
       }
        

        `}
      </Style>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Transparent to Solid Nav</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">About</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Another Link</a></li>
          </ul>
        </div>{/*/.nav-collapse */}
      </div>
    </nav>
    <div className="image">
      <h1 className="heading">Main Heading</h1>
      <p><button className="btn btn-large">Big Button</button></p>
    </div>
    <div className="about">
      <h2>Main Description</h2>
      <p>Roll on the floor purring your whiskers off intrigued by the shower burrow under covers, and play time, rub face on everything, intently sniff hand, or pelt around the house and up and down stairs chasing phantoms. Attack feet. Damn that dog shake treat bag under the bed drink water out of the faucet for lick butt love to play with owner's hair tie. Swat at dog give attitude.</p>
    </div>
  </div>
  )
}
}

export default Header;