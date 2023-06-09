import { Link } from "react-router-dom"
import '../styles/Navbarlanding.css'

function Navbarlanding() {
  return (
    <div className="landing-nav">
        <h3>HELLO<span>EVENTS</span></h3>
        <ul>
            <li style={{textDecoration:'none'}}><Link to='/'>Home</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbarlanding