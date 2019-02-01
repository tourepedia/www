import React from 'react'
import PropTypes from 'prop-types'

export const StopPropagation = ({ children }) => (
  <object
    tabIndex={-1}
    role="button"
    onKeyDown={e => {
      if (e.keyCode === 13) {
        e.stopPropagation()
      }
    }}
    onClick={e => {
      e.stopPropagation()
    }}
  >
    {children}
  </object>
)

StopPropagation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StopPropagation
