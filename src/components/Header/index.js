import React from 'react';

import { useHistory } from "react-router-dom";
import { isLoggedIn } from '../../helper'

import style from './style.module.css'

export default function Header () {
    let history = useHistory();
    const onProfile = history.location.pathname === '/profile' 

    return (
        <header className={style.main} style={{width: onProfile || !isLoggedIn() ? '70%' : '100%' }}>
            <h3 className={style.login} onClick={() => isLoggedIn() ? localStorage.clear() | history.push('/') : history.push('/login')}>
                {isLoggedIn() ? 'Logout' : 'Login'}
            </h3>
            <h1 onClick={() => history.push('/')}>Mesumi </h1>
            {
              (isLoggedIn() && !onProfile) && <h3 onClick={() => history.push('/profile')}> Profile </h3>
            }
        </header>
    )
}