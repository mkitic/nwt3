import React from 'react'
import PropTypes from 'prop-types'

import s from './style.module.css'

const Spinner = ({styleProp, center, purple}) =>
  <div className={`${s['lds-ellipsis']} ${center ? s.center : ''} ${purple ? s.purple : ''}`}>
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