import React from 'react';
import './counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        const decreament = () => {
            if (this.state.count > 0) {
                this.setState({
                  count: this.state.count - 1,
                });
            }
            
        }

        const increament = () => {
            this.setState({
                count: this.state.count+1
            })
        }
        return (
            <div className='main'>
                <h1 onClick={decreament}>-</h1>
                <h1>{this.state.count}</h1>
                <h1 onClick={increament}>+</h1>
            </div>
        )
    }
}


export default Counter
