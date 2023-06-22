import { Link } from "react-router-dom"
import '../styles/Navbarlanding.css'
// import { useEffect } from "react"
 import { useState, useEffect } from "react"

function Navbarlanding() {
  //  const [Token, setToken] = useState(false)

  // useEffect(() => {
    
  //   setIsLoggedIn(!false);
  // }, []);
  
  
  // const getToken =()=>{
    const Token = localStorage.getItem("user")
  //   setToken(!false)
  //  console.log(Token)
  // } 
  // useEffect(()=>{
  //   getToken()
  // },[])
    
    // if(Token){
    //   setIsLoggedIn(!false)
    // }
  
  return (
    <div className="landing-nav">
        <h3>HELLO<span>EVENTS</span></h3>
        <ul>
          {!Token ?(
            <>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </>
          ) : (
            <>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          )}
          {/* <li><Link to='/createEvent'>create Event</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbarlanding