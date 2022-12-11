import "./login.scss"
import { Wrapper } from "../../components/Wrapper/Wrapper"
import { Card } from "../../components/Card/Card"
import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <Wrapper>
      <Card> 
        <div className="login">
          <div className="logo">CodeShare</div>
          <div className="form-container">
            <h1>Sign in to your account</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>Login</button>
            </form>
            <div>New here? <Link to="/register">Create an account</Link></div>
          </div>           
        </div>
      </Card>
    </Wrapper>
  )
}
