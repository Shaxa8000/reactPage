import React from 'react'
import './App.css'
import Counter from './Counter'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           message: 'Welcome visitor!'
        }
    }
    render() {
      const changeMessage = () => {
          this.setState({
              message: 'Thank you for Subscribing!'
          })
      }

        return (
          <div className='main'>
            <h1>{this.state.message}</h1>
                <button onClick={changeMessage}>Subscribe</button>
          </div>
        );
    }
}


export default App