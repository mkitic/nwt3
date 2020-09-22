import React, {useState, useEffect} from 'react'

import styles from './style.module.css'
import { getToken, api, setStoreItem } from '../../helper'
import ImageContainer from '../../components/ImageContainer'
import { Redirect } from 'react-router-dom'

const Profile = () => {
  const isAuth = getToken()
  const [profile, setProfile] = useState({})
  useEffect(() => {
    api.get('profile', true).then(res => {
    setProfile(res.data)
    setStoreItem('profile', res.data)
  })})

  if (!isAuth) {
    return <Redirect to='login' />
  }

  return (
    <section className={styles.profile}>
      <header className={styles.profileHeader}>
        <img src={profile.profileImg} alt="profile"/>
        <section>
          <h2>
            {profile.fullName}
          </h2>
          <p>
            {profile.bio}
          </p>
          <h3>
            {profile.summary}
          </h3>
        </section>
    </header>
    <ImageContainer search={false} url={`profile/posts`} local />
    </section>)
}

export default Profile