import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
<<<<<<< HEAD
  const {isAuthenticated,loginWithRedirect,logout,user}=useAuth0()
  const [myUser,setMyUser]=useState(null)
  useEffect(()=>{
=======
  const {isAuthenticated,loginWithRedirect,logout,user,isLoading}=useAuth0()
  const [myUser,setMyUser]=useState(null)
  useEffect(()=>{
    console.log(`user:${user}`)
    console.log(`isAuthenticated:${isAuthenticated}`)
    console.log(`isLoading:${isLoading}`)
  },[isAuthenticated])

  useEffect(()=>{
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
    if(isAuthenticated){
      setMyUser(user)
    } else {
      setMyUser(false)
    }
<<<<<<< HEAD
  },[isAuthenticated,user])
=======
  },[isAuthenticated])
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
  return (
    <UserContext.Provider value={{loginWithRedirect,logout,myUser}}>
      {children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
