import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Navbarlanding from '../components/navbar-landing'
import Home from '../components/Home'
// import Events from '../components/events'
import Footer from '../components/Footer'
import Myevents from './myevents'
// import OnsightEvents from './onsightEvents'
// import OnlineEvents from './onlineEvents'

function LandingPage() {
  return (
    <BrowserRouter>
    <Navbarlanding/>
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/events' element = {<Myevents/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        {/* <Route path='/online-events' element = {<OnlineEvents/>}></Route>
        <Route path='/onsight-events' element = {<OnsightEvents/>}></Route> */}
        <Route path='*' element = {<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default LandingPage