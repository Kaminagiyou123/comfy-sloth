import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
<<<<<<< HEAD
import {Home,About,Products,SingleProduct,Cart,Error,Checkout,PrivateRoute,AuthWrapper} from './pages'
function App() {
  
  return <AuthWrapper>
  <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
      <Route exact path='/' ><Home/></Route>
      <Route exact path='/about' ><About/></Route>
      <Route exact path='/products' ><Products/></Route>
      <Route exact path='/cart' ><Cart/></Route>
      <Route exact path='/error' ><Error/></Route>
      <PrivateRoute exact path='/checkout' ><Checkout/></PrivateRoute>
=======
import {Home,About,Products,SingleProduct,Cart,Error,Checkout,Private} from './pages'
function App() {
  return <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
      <Route exact path='/' exact><Home/></Route>
      <Route exact path='/about' exact><About/></Route>
      <Route exact path='/products' exact><Products/></Route>
      <Route exact path='/cart' exact><Cart/></Route>
      <Route exact path='/error' exact><Error/></Route>
      <Private exact path='/checkout' ><Checkout/></Private>
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
      <Route exact path='/products/:id' children= {<SingleProduct/>}/>
  </Switch>
  <Footer/>
  </Router>
<<<<<<< HEAD
  </AuthWrapper>
=======
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
}

export default App
