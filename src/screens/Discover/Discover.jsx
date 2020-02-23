import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Navbar } from '../../components/layout/NavbarHome'
import { Row, Col } from 'react-bootstrap'
import { getEvents } from '../../store/events'


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
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Events List */}
          <Col span="6" md="5" lg="4">
            <section className="events-list-container">
              <ul className="events-list">
                {events.length > 0 && events.map((event, index) => {

                })}
              </ul>
            </section>
          </Col>
          {/* Event Map */}
          <Col span="6" md="7" lg="8">
          
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