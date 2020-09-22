import React from 'react'
import PropTypes from 'prop-types'

import s from './style.module.css'

const Spinner = () =>
  <div className={`${s['lds-ellipsis']} ${s.center}`}>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>

Spinner.propTypes = {
  styleProp: PropTypes.string
}

export default Spinner