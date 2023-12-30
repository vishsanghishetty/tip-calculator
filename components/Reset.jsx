import React from 'react'
import PropTypes from 'prop-types';

export default function Reset({ onHandleReset }) {
 
  return (
     <button className='bg-blue-600 text-slate-100 px-4 py-1 my-2 rounded-lg' type='reset' onClick={onHandleReset}>Reset</button>
  )
}

Reset.propTypes = {
    onHandleReset: PropTypes.func.isRequired,
}
