import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


import Header from './header';
import Footer from './footer';
import Dashboard from './components/dashboard';
import Users from './components/users';

class Content extends React.Component {
  // componentWillMount() {
  //   ['../js/dashboard.js', '../js/todolist.js', '../js/template.js', '../js/off-canvas.js', '../vendors/chart.js/Chart.min.js',
  //    '../vendors/base/vendor.bundle.base.js' , '../js/hoverable-collapse.js'].forEach((src) => {
  //     const script = document.createElement('script');
  //     script.src = src;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   });
  // }
  render() {
    return (
      <div className='container-scroller'>
        <Header />
        <div className="container-fluid page-body-wrapper">

          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="/admin/dashboard">
                  <i className="ti-shield menu-icon" />
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/users">
                  <i className="ti-layout-list-post menu-icon" />
                  <span className="menu-title">Users</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/charts/chartjs.html">
                  <i className="ti-pie-chart menu-icon" />
                  <span className="menu-title">Charts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/tables/basic-table.html">
                  <i className="ti-view-list-alt menu-icon" />
                  <span className="menu-title">Tables</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/icons/themify.html">
                  <i className="ti-star menu-icon" />
                  <span className="menu-title">Icons</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i className="ti-user menu-icon" />
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="documentation/documentation.html">
                  <i className="ti-write menu-icon" />
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="content-wrapper">
            <Router>

              <Route exact path='/admin/dashboard' component={Dashboard} />
              <Route path='/admin/users' component={Users} />

            </Router>
            <Footer />
          </div>

        </div>
        
      </div>
    )
  }

}

export default Content;