import React from 'react';

import Login from './auth/login';
import Header from './admin/header';
import Conternt from './admin/content';
import Footer from './admin/footer';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            isLogdin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
    }

    handleSubmit(event) {
        this.setState({
            isLogdin: true,
            isLoading:true
        })
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
        event.preventDefault();
    }

    render() {
        if (this.state.isLoading == true) {
            return (
                <div className='d-flex w-100' style={{ height: '100vh' }}>
                    <div className="lds-dual-ring mx-auto my-auto" ></div>
                </div>
            )
        }
        if (this.state.isLogdin == false) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <Login />
                </form>
            );
        }
        
        return(
            <div>
                <Header />
                <Conternt />
                <Footer />
            </div>
        )
    }

}

export default App;
