import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
<<<<<<< HEAD
// import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children,...rest}) => {
  const {user}=useAuth0();
  return <Route {...rest} render={()=>{
    return user ? children: <Redirect to='/'/>
=======
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children,...rest}) => {
  const {myUser}=useUserContext();
  return <Route {...rest} render={()=>{
    return myUser ? children: <Redirect to='/'/>
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
  }}
  ></Route>;
};
export default PrivateRoute;
