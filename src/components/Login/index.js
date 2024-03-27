// Write your code here
import './index.css'

const Login = props => {
  const {isButtonClicked} = props
  const changeStatus = () => {
    isButtonClicked()
  }
  return (
    <button type="button" className="button" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Login
