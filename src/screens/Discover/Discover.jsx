import React, { useEffect } from 'react'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { Container, Card, Spinner } from 'react-bootstrap'
import { Navbar } from '../../components/layout/NavbarHome'
import { Row, Col } from 'react-bootstrap'
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../store/events'
import { MapboxMap } from '../../components/Map'
import { selectEventsForMap } from '../../store/selectors'
import { SpinnerSection } from '../../styles/Spinner.style'


const EventCard = styled(Card)`
  .img-fluid {
    max-height: 100%;
    width: auto;
  }

  h1 {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const DiscoverUI = ({
  events: {
    events,
    loading,
    errors
  },
  mapEvents,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
}) => {

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Events List */}
          <Col md="5" lg="4">
            <SpinnerSection className="events-list-container">
              {loading ? (
                <div className="spinner-container">
                  {/* Position Absolute */}
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <ul className="events-list">
                  {events.length > 0 ? events.map((event, index) => {
                    // TODO: make its own component
                    return (
                      <EventCard key={index}>
                        <Row>
                          <Col size="3">
                            {/* Image Thumbnail */}
                            <img height={100} className="img-fluid" src={event.img_url} alt="image for event item" />
                          </Col>
                          <Col size="9">
                            <LinkContainer to={`/events/${event._id}`}>
                              <h1>{event.event_name}</h1>
                            </LinkContainer>
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
              )}
            </SpinnerSection>
          </Col>
          {/* Event Map */}
          {/* todo: on mobile screen, pull up */}
          <Col md="7" lg="8">
            <MapboxMap events={events} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => ({
  events: state.events,
  mapEvents: selectEventsForMap(state)
})

export const Discover = connect(
  mapStateToProps,
  { getEvents, addEvent, updateEvent, deleteEvent }
)(DiscoverUI)