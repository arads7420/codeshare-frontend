import "./myprojects.scss"
import { MyPostContainer } from "../../components/MyPostContainer/MyPostContainer"
import { useState } from "react"

export const MyProjects = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="myprojects">
      <div className="top">
        <div className="header">
          <div className="title">My projects ({count})</div>
        </div>
      </div>
      <div className="container">
          <MyPostContainer setCount={setCount} />
      </div>
    </div>
  )
}
