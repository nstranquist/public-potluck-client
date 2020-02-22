import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { MdAddLocation, MdEdit } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'


const StyledToolbar = styled.div`
  .create-form-toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;

    li {
      display: inline-block;
      margin-left: 12px;
      margin-right: 12px;

      .form-toolbar-link {
        display: block;
        padding: 1rem 1.6rem .6rem 1.3rem;
        margin-bottom: .4rem;
        cursor: pointer;
        color: black;
        opacity: .5;
        border-bottom: 3px solid rgba(0,0,0,.8);
        transition: .1s ease-in-out;


        &.active#orange {
          color: #fa8100;
          border-bottom: 3px solid #fa8100
        }
        &.active#blue {
          color: #6002ee;
          border-bottom: 3px solid #6002ee
        }
        &.active#green {
          color: #41c300;
          border-bottom: 3px solid #41c300
        }

        &.active {
          opacity: 1;
          transition: .1s ease-in-out;
        }

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  @media(max-width: 600px) {
    .create-form-toolbar {
      flex-wrap: nowrap;

      li {
        margin-left: 8px;
        margin-right: 8px;
        white-space: nowrap;

        .form-toolbar-link {
          padding: .7rem 1.2rem .4rem 1rem
        }
      }
    }
  }

  @media(max-width: 400px) {
    .create-form-toolbar {
      flex-direction: column;
    }
  }
`


export const Toolbar = ({
  formStep,
  setActiveStep
}) => {

  const handleToolbarClick = (e, params) => {
    e.preventDefault()

    console.log('clicked tab event:', e, 'params:', params)
    setActiveStep(params)
  }

  const regClass = "form-toolbar-link"
  const actClass = "form-toolbar-link active"

  // render a list of icons that can be clicked
  return (
    <Container>
      <StyledToolbar>
        <ul className="create-form-toolbar">
          {/* Event */}
          <li>
            <a id="orange" className={formStep===0 ? actClass : regClass} onClick={(e) => handleToolbarClick(e, 0)}>
              <GiKnifeFork />
              <span style={{marginLeft:6}}>Event</span>
            </a>
          </li>
          {/* Location */}
          <li>
            <a id="green" className={formStep===1 ? actClass : regClass} onClick={(e) => handleToolbarClick(e, 1)}>
              <MdAddLocation />
              <span style={{marginLeft:6}}>Location</span>
            </a>
          </li>
          {/* Details */}
          <li>
            <a id="blue" className={formStep===2 ? actClass : regClass} onClick={(e) => handleToolbarClick(e, 2)}>
              <MdEdit />
              <span style={{marginLeft:6}}>Extras</span>
            </a>
          </li>
        </ul>
      </StyledToolbar>
    </Container>
  )
}
