import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
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
      <Route exact path='/products/:id' children= {<SingleProduct/>}/>
  </Switch>
  <Footer/>
  </Router>
}

export default App
