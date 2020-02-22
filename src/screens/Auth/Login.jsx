import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { attemptLogin } from '../../store/auth'
import '../../styles/auth.css'


const emptyLoginForm = {
  email: "",
  password: "",
}

export const LoginUI = ({
  auth: {
    isAuth,
    loading,
    errors,
    isSignedUp,
  },
  attemptLogin
}) => {
  const [formData, setFormData] = useState(emptyLoginForm)

  useEffect(() => {
    return () => resetForm()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // submit form data
    attemptLogin(formData.email, formData.password)
    
    resetForm()
  }
  
  const resetForm = () => setFormData(emptyLoginForm)
  
  if(isSignedUp) {
    alert("you have signed up successfully!")
  }

  return (
    <Container style={{position: 'relative'}} fluid>
      <Row className="justify-content-md-center" style={{height: '100vh', background:"#fff"}}>
        <Col md="8" lg="6" xl="4" style={{display:'flex',alignItems:'center'}}>
          <section className="login-container" 
            style={{display:'block', width:'100%', flex:1, padding:"3rem 1.5rem", border:'1px solid rgba(0,0,0,.1)'}}>
            <header className="auth-form-header" style={{textAlign:'center', marginBottom:'2.5rem'}}>
              <h1>Public Potluck</h1>
              <h5>Sign In</h5>
            </header>

            {/* Errors from redux */}
            {errors && (
              <div className="login-error-container" style={{textAlign:'center',color:'red',marginTop:'1rem',marginBottom:'.5rem'}}>
                <p className="login-error-text">{errors}</p>
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="auth-form-group" style={{marginTop:"1.2rem"}}>
                <Form.Control autoFocus name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="auth-form-group" style={{marginTop:"1.2rem"}}>
                <Form.Control name="password" onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
              </Form.Group>
              <div className="login-btn" style={{textAlign:'center', marginTop:"1.5rem"}}>
                <Button type="submit">Login</Button>
              </div>
            </Form>
            <div className="signup-link-container" style={{textAlign:'center', marginTop:'2rem'}}>
              <Link to="/signup">Don't have an account? Signup Here</Link>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export const Login = connect(
  mapStateToProps,
  { attemptLogin }
)(LoginUI)