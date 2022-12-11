import "./style.scss"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/Register"
import { Navbar } from "./components/Navbar/Navbar"
import { LeftBar } from "./components/LeftBar/LeftBar"
import { RightBar } from "./components/RightBar/RightBar"
import { Home } from "./pages/home/Home"
import { Profile } from "./pages/profile/Profile"
import { Categories } from "./pages/categories/Categories"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";



function App() {
  const currentUser = false

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: 2}}> 
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/categories",
          element: <Categories />
        },
        {
          path: "profile/:id",
          element: <ProtectedRoute><Profile /></ProtectedRoute>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
