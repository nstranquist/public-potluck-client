import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Container, Card } from 'react-bootstrap'
import { Navbar } from '../../components/layout/NavbarHome'
import { Row, Col } from 'react-bootstrap'
import { getEvents } from '../../store/events'


const EventCard = styled(Card)`
  .img-fluid {
    max-height: 100%;
    width: auto;
  }
`

export const DiscoverUI = ({
  events: {
    events,
    loading,
    errors
  },
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
}) => {

  useEffect(() => {
    getEvents()
  }, [])

  if(loading) {
    return (
      <div>
        <Navbar />
        <Container>
          <div>
            Loading...
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Events List */}
          <Col md="4" lg="3">
            <section className="events-list-container">
              <ul className="events-list">
                {events.length > 0 ? events.map((event, index) => {
                  return (
                    <EventCard key={index}>
                      <Row>
                        <Col size="3">
                          {/* Image Thumbnail */}
                          <img className="img-fluid" src={event.img_url} alt="image for event item" />
                        </Col>
                        <Col size="9">
                          <h1>{event.event_name}</h1>
                          <p>{event.event_description}</p>
                        </Col>
                      </Row>
                    </EventCard>
                  )
                }) : (
                  <div>
                    <p>There are no events yet!</p>
                  </div>
                )}
              </ul>
            </section>
          </Col>
          {/* Event Map */}
          {/* todo: on mobile screen, pull up */}
          <Col md="8" lg="9">
            map
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => ({
  events: state.events
})

export const Discover = connect(
  mapStateToProps,
  { getEvents }
)(DiscoverUI)