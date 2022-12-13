import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/Register"
import { Navbar } from "./components/Navbar/Navbar"
import { LeftBar } from "./components/LeftBar/LeftBar"
import { RightBar } from "./components/RightBar/RightBar"
import { Home } from "./pages/home/Home"
import { Profile } from "./pages/profile/Profile"
import { Categories } from "./pages/categories/Categories"
import { CreatePostForm } from "./components/CreatePostForm/CreatePostForm"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "./context/authContext"
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()


function App() {
  const {currentUser} = useContext(AuthContext)

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    )
  }


  const ProfileLayout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar/>
          <Profile/>
        </div>
      </QueryClientProvider>
    )
  }

  
  const CreatePostFormLayout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar/>
          <CreatePostForm/>
        </div>
      </QueryClientProvider>
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
        // {
        //   path: "profile/:id",
        //   // element: <ProtectedRoute><Profile /></ProtectedRoute>
        //   element: <Profile />
        // }
      ]
    },
    {
      path: "profile/:id",
      element: <ProfileLayout />,
    },
    {
      path: "/createpost",
      element: <CreatePostFormLayout />,
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
