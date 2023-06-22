  import axios from 'axios'
  import {useState, useEffect} from 'react'
  import {useNavigate} from 'react-router-dom'
  // import NavbarLoggedin from '../components/navbar-loggedin'
  import '../styles/events.css'

  function Myevents() {
    const [events, setEvents] = useState([]);

    const navigate = useNavigate();
    function handleClick(){
      navigate('/createEvent')
    }

    useEffect(()=>{
      const fetchEvents = async ()=>{
        try {
          const response = await axios.get('http://127.0.0.1:3000/events');
          console.log(response.data);
          setEvents(response.data);
        } catch (error) {
          console.log(error)
        }
      }
      fetchEvents();
    }, [])

    const handleBuyTicket = ()=>{
      navigate('/buyTickets')
    }
    return (
      <div className='events'>
        <div className='eventsNav'>
          <div className='eventsButtons'>
            <button><h3>online</h3></button>
            <button><h3>onsight</h3></button>
          </div >
          <button className='create-event' onClick={handleClick}><h3>Create event</h3></button>
        </div>
        <div className='main-events'>
          <div className='events-banner'><h2>WELCOME TO HELLO EVENTS</h2></div>
          <div className='events-container'>
            {events&&events.map((event, index)=>(
              <div className='event-instance' key={index} >
                <div className='event-elements'>
                <p>{event.images}</p>
                <h3>{event.name}</h3>
                <h3>{event.location}</h3>
                <p>{event.description}</p>
              </div>
                <button onClick={handleBuyTicket}><h2>get ticket</h2></button>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    )
  }

  export default Myevents