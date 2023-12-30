import React from 'react'
import PropTypes from 'prop-types';
export default function SelectPercentage({percentage, onSelectPercentage, children }) {
  return (
    <div>
      <label> {children} </label>
      <select value={percentage} onChange={(e)=>onSelectPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="15">It was great (15%)</option>
        <option value="40">Absolutely amazing! (20%)</option>
      </select>

    </div>
  )
}

SelectPercentage.propTypes = {
  children: PropTypes.node.isRequired,
  percentage: PropTypes.number,
  onSelectPercentage: PropTypes.func
}

