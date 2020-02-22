import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/layout/NavbarHome'


export const Profile = ({
  match
}) => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let url = match.params.profileId
    console.log('params url:', url)
    // make api call to get user profile data
    // profile = 
  }, [])

  return (
    <div>
      <Navbar />
      {profile ? (
        <div>Profile</div>
      ) : (
        <div>
          loading...
        </div>
      )}
    </div>
  )
}
