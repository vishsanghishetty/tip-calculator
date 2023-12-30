import React from 'react'
import PropTypes from 'prop-types';

export default function BillInput({billInput, onSetBillInput }) {

  return (
    <div>
      <label>How much was the bill? </label>
      <input placeholder="$0.00" type="text" value={billInput} onChange={e=>onSetBillInput(Number(e.target.value))} />
    </div>
  )
}

BillInput.propTypes = {
  billInput: PropTypes.any,
  onSetBillInput: PropTypes.func
}

