import axios from "axios" 
import '../styles/tickets.css'
import { useEffect, useState } from "react"

function TicketsPage() {
    const [tickets, setTickets] = useState([])
    const [showticket, setShowTicket] = useState(false)
    // const handleshowticket = ()=>{
    //     setShowTicket(true)
    // }
    const handleTicket = async ()=>{
      const response = await axios.get('http://127.0.0.1:3000/events/tickets')
      setTickets([...tickets, response.data])
      setShowTicket(true)
      console.log(response.data[0])
      console.log('clicked')
    }
    // useEffect(()=>{
    //     handleTicket()
    // },[])
  return (
    <div className="ticket-page">
        <h2>buy tickets here</h2>
        <button onClick={()=>handleTicket()}>get ticket</button>
        <div className="ticket">
        { showticket&&
            tickets.map((ticket, index)=>(
                <div className='ticket-items' key={index}>
                    <p>here is your ticket</p>
                    <h3>ticketNumber:{ticket.ticketID}</h3>
                    <p>Price:{ticket.price}</p>
                </div>
            )    
            )
        }
        </div>
        
    </div>
  )
}

export default TicketsPage