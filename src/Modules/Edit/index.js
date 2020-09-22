import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {api, getStorageItem} from '../../helper'
import styles from './style.module.css'

const Edit = () => {
  const profile = getStorageItem('profile')
  const [bio, setBio] = useState(profile?.bio)
  const [profileImgUrl, setProfileImgUrl] = useState(profile?.profileImg)
  const [fullName, setFullName] = useState(profile?.fullName)
  const [summary, setSummary] = useState(profile?.summary)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  let history = useHistory() 
  return(
    <main className={styles.main}>
        <h1>Profile Editor</h1>
        <label>
            Profile image URL
        </label>
        <textarea value={profileImgUrl} type="text" onChange={e => setProfileImgUrl(e.target.value)} />
        <label>
            Full Name
        </label>
        <input value={fullName} type="txt" onChange={e => setFullName(e.target.value)} />
        <label>
            Bio
        </label>
        <textarea value={bio} type="text" onChange={e => setBio(e.target.value)} />
        <label>
            Summary
        </label>
        <input value={summary} type="text" onChange={e => setSummary(e.target.value)} />
        <button onClick={() => {
          setLoading(true)
          api.put('profile', {
            bio, profileImg: profileImgUrl, fullName, summary
          }, true)
          .then(() => history.push('/profile'))
          .catch(() => setError('Edit request failed!'))
          .finally(() => setLoading(false))
        }}>
            {loading ? '.....' : 'Submit'}
        </button>
        {error && <p style={{color: 'red', margin: '0 auto'}}>{error}</p>}
    </main>
    )
}

export default Edit
