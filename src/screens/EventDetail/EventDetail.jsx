import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/layout'
import { Container, Spinner } from 'react-bootstrap'
import { StyledHeader } from '../../styles/Layout.style'
import { SpinnerContainer } from '../../styles/Spinner.style'
import axios from 'axios'

export const EventDetail = ({
  match,
}) => {
  const [event, setEvent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let eventId = match.params.eventId
    // let selectedEvent = events.find(event => event._id === eventId)
    axios.get(`http://api.publicpotluck.com/event/${eventId}`)
      .then(res => {
        setError(null)
        console.log('res.data:', res.data)
        setEvent(res.data)
      })
      .catch(err => {
        console.log('err:', err)
        setError(err)
      })
  }, [match])

  if(error) {
    return (
      <div>
        <Navbar />
        <Container>
          <StyledHeader>
            <h1 className="header-title">We're sorry, we couldn't find that event</h1>
          </StyledHeader>
        </Container>
      </div>
    )
  }
  else if(!event) {
    return (
      <SpinnerContainer className="spinner-page-container">
        <Navbar />
        <div className="spinner-container">
            {/* Position Absolute */}
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
      </SpinnerContainer>
    )
  }

  return (
    <div>
      <Navbar />
      <Container>
        <StyledHeader>
          <h1 className="header-title">{event.event_name}</h1>
          <p className="header-description">{event.event_description}</p>
        </StyledHeader>

        <section className="event-detail-section">
          event detail section here ---->
        </section>
      </Container>
    </div>
  )
}
