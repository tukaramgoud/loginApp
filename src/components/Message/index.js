// Write your code here
import './index.css'

const Message = props => {
  const {msg} = props
  return msg ? (
    <h1 className="msg-styling">Welcome User</h1>
  ) : (
    <h1 className="msg-styling">Please Login</h1>
  )
}

export default Message
