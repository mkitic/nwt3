import React, { useState } from 'react';

import styles from './style.module.css'
import { api, setToken, isLoggedIn } from '../../helper'
import Spinner from '../../components/Spinner'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    let history = useHistory()

    if (isLoggedIn()) {
        // destroy local storage
        localStorage.clear()
        history.replace('/login')
    }

    const login = async (username, password) => {
        setLoading(true)
        setError(false)
        await api.post('profile/auth', {
        username,
        password
    }).then(res => {
        if (res.code !== 200) {
            setError(res.data.message)
        } else {
        setToken(res.data.token)
        history.replace('/profile')
        }
    })
    .catch(console.error)
    .finally(() => setLoading(false))
}

    return(
        <main className={styles.main}>
            <h1>Login</h1>
            <label>
                Username
            </label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>
                Password
            </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="" onClick={() => login(username, password)}>
                {loading ? '....' : 'Login'}
            </button>
            {error && <p style={{color: 'red', margin: '0 auto'}}>{error}</p>}
        </main>)
    }

export default Login
