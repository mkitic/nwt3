import React from 'react'

import {isLoggedIn} from '../../helper'

const AuthProtect = ({children, alternative}) => (
  <>
  {isLoggedIn() ? children : alternative}
  </>
)

export default AuthProtect