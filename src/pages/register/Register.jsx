import "./register.scss"
import { Wrapper } from "../../components/Wrapper/Wrapper"
import { Card } from "../../components/Card/Card"
import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <Wrapper>
      <Card> 
        <div className="register">
          <div className="logo">CodeShare</div>
          <div className="form-container">
            <h1>Create an account</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button>Register</button>
            </form>
            <div>Already have an account? <Link to="/login">Sign In</Link></div>
          </div>           
        </div>
      </Card>
    </Wrapper>
  )
}
