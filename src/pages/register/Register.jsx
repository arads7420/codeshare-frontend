import "./register.scss"
import { Wrapper } from "../../components/Wrapper/Wrapper"
import { Card } from "../../components/Card/Card"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

export const Register = () => {
  const {register} = useContext(AuthContext)
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)


  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleRegister= async () => {
    try {
      await register(inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data.error)
    }
  }


  const handleClick = async e => {
    e.preventDefault()

    if(inputs.username.length === 0) {
      setError("Please enter a username")
    }
    else if(inputs.email.length === 0) {
      setError("Please enter your email")
    }
    else if(inputs.password.length === 0) {
      setError("Please enter your password")
    }
    else {
      handleRegister()
    }
  }

  return (
    <Wrapper>
      <Card> 
        <div className="register">
          <Link to="/">
            <div className="logo">CodeShare</div>
          </Link>
          <div className="form-container">
            <h1>Create an account</h1>
            <form>
              {error && (<div className="error">{error}</div>)}
              <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
              <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <button onClick={handleClick}>Register</button>
            </form>
            <div>Already have an account? <Link to="/login">Sign In</Link></div>
          </div>           
        </div>
      </Card>
    </Wrapper>
  )
}
