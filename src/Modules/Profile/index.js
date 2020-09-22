import React, {useState, useEffect} from 'react'

import styles from './style.module.css'
import { getToken, api, setStoreItem } from '../../helper'
import ImageContainer from '../../components/ImageContainer'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Spinner from '../../components/Spinner'

const Profile = () => {
  const isAuth = getToken()
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    api.get('profile', true).then(res => {
    setProfile(res.data)
    setStoreItem('profile', res.data)
    setStoreItem('currentlyLiked', res.data.likedPosts)
    setLoading(false)
  })}, [])

  if (!isAuth) {
    return <Redirect to='login' />
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <section className={styles.profile}>
      <Header />
      <header className={styles.profileHeader}>
        <img src={profile.profileImg} alt="profile"/>
        <section className={styles.personal}>
          <h2>
            @{profile.username}
          </h2>
          <p>
            {profile.email}
          </p>
        </section>
        <section className={styles.bio}>
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