import "./login.scss"
import { Wrapper } from "../../components/Wrapper/Wrapper"
import { Card } from "../../components/Card/Card"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

export const Login = () => {
  const {login} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  
  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleLogin = async () => {
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data.error)
    }
  }

  const handleClick = e => {
    e.preventDefault()

    if(inputs.username.length === 0) {
      setError("Please enter your username")
    }
    else if(inputs.password.length === 0) {
      setError("Please enter your password")
    }
    else {
      handleLogin()
    }
  }

  return (
    <Wrapper>
      <Card> 
        <div className="login">
          <Link to="/">
            <div className="logo">CodeShare</div>
          </Link>
          <div className="form-container">
            <h1>Sign in to your account</h1>
            <form>
              {error && (<div className="error">{error}</div>)}
              <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <button onClick={handleClick}>Login</button>
            </form>
            <div>New here? <Link to="/register">Create an account</Link></div>
          </div>           
        </div>
      </Card>
    </Wrapper>
  )
}
