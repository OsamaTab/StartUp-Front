import React from 'react';

import Login from './auth/login';

import Main from './front_page/main';

import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

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
                <Router>
                  
                    <form onSubmit={this.handleSubmit}>
                        <Route path='/' exact component={Login}/>
                    </form>
                
                    <Route path='/admin' component={Main}/>
                    
                </Router>
            )
        
    }

}

export default App;
