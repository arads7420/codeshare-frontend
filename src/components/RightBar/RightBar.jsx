import "./rightbar.scss"
import { Link } from "react-router-dom"

export const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <h2>New to CodeShare?</h2>
        <p>Showcase your software creations, join the community.</p>
        <Link to="/register" className="primary">Sign Up with Email</Link>
        <Link to="/login" className="secondary">Sign In</Link>
      </div>
    </div>
  )
}
