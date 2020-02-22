import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../../styles/home.css'

export const HeaderWelcome = () => {

  const handleDiscover = (e) => {

  }

  return (
    <div className="header-welcome" style={{background:'blue',marginTop:15,marginBottom:15, textAlign:'center',color:'white'}}>
      <h6>Welcome</h6>
      <LinkContainer to="/discover">
        <Button>Discover</Button>
      </LinkContainer>
      <LinkContainer to="/create">
        <Button>Start a Potluck</Button>
      </LinkContainer>
    </div>
  )
}
