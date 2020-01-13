import React from 'react';

import Login from './login';

class App extends React.Component {
	constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
    }

	render() {
		if(this.state.isLoading == true){
            return (
                <div className='d-flex w-100' style={{height:'100vh'}}>
                    <div className="lds-dual-ring mx-auto my-auto" ></div>
                </div>
              )
		}
		
		return (
			<Login/>
		);
	}

}

export default App;
