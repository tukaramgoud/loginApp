// Write your code here
import './index.css'

const Message = props => {
  const {msg} = props
  return msg ? <h1>Welcome User</h1> : <h1>Please Login</h1>
}

export default Message
