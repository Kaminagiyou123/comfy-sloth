import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

<<<<<<< HEAD
const AuthWrapper = ({children}) => {
  const {isLoading,error}=useAuth0()
  if(isLoading){
    return <Wrapper>
      <h1>Loading...</h1>
      </Wrapper>
  }
  if (error){
    return <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper>
  }
  return <>{children}</>
=======
const AuthWrapper = () => {
  return <h4>AuthWrapper Component</h4>
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
