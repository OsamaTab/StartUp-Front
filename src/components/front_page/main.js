import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

import Header from './header';
import MainPage from './components/main_page';
import Footer from './footer';

class Main extends React.Component {

    render() {
        return (
            <div>

                <Header />
                <MainPage/>
                <Footer />

            </div>
        )
    }
}

export default Main;