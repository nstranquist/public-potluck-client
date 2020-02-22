import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
  text-align: center;
  padding: 3rem 1.5rem;
  margin-bottom: 1rem;
  font-family: sans-serif;
  margin-left: 16.65%;
  margin-right: 16.65%;

  .header-title {
    font-color: rgba(0,0,0,.75);
    margin-bottom: 1.5rem;
  }

  .header-description {
    font-color: rgba(0,0,0,.6);
  }

  @media (max-width: 800px) {
    margin-left: initial;
    margin-right: initial;
  }
`
const fullHeaderData = [
  {
    title: 'Event Basics',
    description: 'Add the basic information in order to create your event. Keep in mind that the more details you provide here, the more likely you are to resonate with other potluckers!',
  },
  {
    title: "Location",
    description: "Add information to help your community find you!"
  },
  {
    title: "Extras",
    description: "Add extra information about the event for your fellow potluckers and opt into additional features if you like"
  }
]

export const Header = ({
  formStep
}) => {
  const [headerData, setHeaderData] = useState(fullHeaderData[formStep])

  useEffect(() => {
    setHeaderData(fullHeaderData[formStep])
  }, [formStep])

  return (
    <StyledHeader className="create-header">
      <h1 className="header-title">{headerData.title}</h1>
      <p className="header-description">{headerData.description}</p>
    </StyledHeader>
  )
}
