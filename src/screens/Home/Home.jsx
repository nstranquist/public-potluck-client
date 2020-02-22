import React from 'react'
import { HeaderWelcome } from './index'
import { Navbar } from '../../components/layout/Navbar'

export const Home = () => {
  return (
    <div className="home-page">
      {/* Will render navbar in each component, because its contents may change per route */}
      <Navbar />
      <HeaderWelcome />
      {/* Content View Here */}
      <section className="home-section">
        home page
      </section>
    </div>
  )
}
