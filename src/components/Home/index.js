// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isTrue: false}

  knowStatus = () => {
    this.setState(pervState => ({isTrue: !pervState.isTrue}))
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="background-container">
        <Message msg={isTrue} />
        {isTrue ? (
          <Logout isButtonClicked={this.knowStatus} />
        ) : (
          <Login isButtonClicked={this.knowStatus} />
        )}
      </div>
    )
  }
}

export default Home
