import React from 'react';

import Login from './auth/login';

import MainAdmin from './admin/main';
import MainFront from './front_page/main';

import {BrowserRouter as Router ,Route,Switch,Redirect} from 'react-router-dom'

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
            return (
                <Router >
                    <form onSubmit={this.handleSubmit}>
                        <Route path='/login' exact component={Login}/>
                    </form>
                
                    <Route path='/admin' component={MainAdmin}/>
                    <Route path='/' exact component={MainFront}/>
                    
                </Router>
            )
        
    }

}

export default App;
