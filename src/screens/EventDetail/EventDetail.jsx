import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Navbar } from '../../components/layout'
import { Container, Spinner, Row, Col } from 'react-bootstrap'
import { StyledHeader } from '../../styles/Layout.style'
import { SpinnerContainer } from '../../styles/Spinner.style'
import axios from 'axios'
import { CircleButton } from '../../styles/Buttons.style'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { MdStarBorder, MdStart } from 'react-icons/md'


const StyledEventDetail = styled.div`


  .event-detail-header {
    display: flex;
    height; 400px;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    .header-description {
      font-size: 1.1rem;
    }

    .image-left {
      flex: 1;
      display: inline-block;
      text-align: center;

      img {
        min-height: 150px;
        height: 100%;
        max-height: 20vh;
        width: 100%;
        margin: 0 auto;
      }
    }
    .header-right-body {
      margin-left: 1.2rem;
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      font-family: sans-serif;
      
      .top {
        flex: 1;
      }
    }
    .header-right-far {
      width: 50px;
      text-align: center;
      padding: 3px;

      span {
        font-size: 1.8rem;
        opacity: 1;
      }
    }
  }

  .event-detail-section {

    .tags-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      
      span {
        font-size: 1.3rem;
      }
    }

    .icon-item {
      display: flex;
      align-items: center;
      padding: 15px 10px;
      justify-content: space-between;
      font-size: 1.4rem;
      opacity: .8;
    }
  }
`

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

  const getDateString = () => {
    let eventDate = new Date(event.date_time)
    let dateString = `${eventDate.getMonth()+1}/${eventDate.getDate()}`
    if(dateString)
      return dateString
  }

  return (
    <StyledEventDetail>
      <Navbar />
      <Container>
        <header className="event-detail-header" style={{borderBottom:"1px solid rgba(0,0,0,.12)"}}>
          <div className="image-left">
            <img src={event.img_url} alt="the event image" className="img-fluid" />
          </div>
          <div className="header-right-body">
            <div className="top">
              <h1 className="header-title">{event.event_name}</h1>
              <p className="header-description">{event.event_description}</p>
            </div>
            <div className="bottom">
              <div className="tags-bar">
                <span style={{marginRight:10}}>tags: </span>
                {event.tags.length > 0 ? event.tags.map((tag, index) => (
                  <CircleButton key={index} tag={tag}>
                    <span>{tag}</span>
                  </CircleButton>
                )) : (
                  <span>none</span>
                  )}
              </div>
            </div>
          </div>
          <div className="header-right-far">
            {/* Format the date */}
            <span>{getDateString()}</span>
          </div>
        </header>

        <section className="event-detail-section">

          {/* Other Content: */}
          {/* Icons for different things? */}
          <div className="icons-box">
            {/* A 4x2 icons box, 2 cols and 4 rows */}
            <Row gutters={[16,16]}>
              {/* Leftovers */}
              <Col md={{span: 4, offset: 2}}>
                <div className="icon-item">
                  <div className="item-left">
                    <GiOpenedFoodCan style={{marginRight:8, fontSize:'1.6rem'}} />
                    <span>Leftovers</span>
                  </div>
                  <div className="item-right">
                    <span>{event.leftovers}</span>
                  </div>
                </div>
              </Col>

              {/*  */}
              <Col md={{span: 4, offset: 2}}>
                <div className="icon-item">
                  <div className="item-left">
                    <GiOpenedFoodCan />
                    <span>Leftovers</span>
                  </div>
                  <div className="item-right">
                    <span>{event.leftovers}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </StyledEventDetail>
  )
}
