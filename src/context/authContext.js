import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
            withCredentials: true,
        })

        setCurrentUser(res.data)
    }
    
    const register = async (inputs) => {
        const res = await axios.post("http://localhost:5000/api/auth/register", inputs, {
            withCredentials: true,
        })

        setCurrentUser(res.data)
    }

    const logout = async () => {
        setCurrentUser(null)
    }


    useEffect(() => {
        if(currentUser === null) {
            localStorage.removeItem("user")
        }
        else {
            localStorage.setItem("user", JSON.stringify(currentUser))
        }
    }, [currentUser])


    return (
        <AuthContext.Provider value={{currentUser, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}