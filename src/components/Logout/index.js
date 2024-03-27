// Write your code here
// Write your code here
import './index.css'

const Logout = props => {
  const {isButtonClicked} = props
  const changeStatus = () => {
    isButtonClicked()
  }
  return (
    <button type="button" className="button" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Logout
