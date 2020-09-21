import React, {useState} from 'react'

import styles from './style.module.css'
import { getStorageItem } from '../../helper'
import ImageContainer from '../../components/ImageContainer'

const Profile = () => {
  const [profile, setProfile] = useState(getStorageItem("user"))
  console.log(typeof profile)

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
    <ImageContainer url="" />
    </section>)
}

export default Profile