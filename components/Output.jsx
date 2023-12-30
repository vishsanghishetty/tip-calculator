import React from 'react'
import PropTypes from 'prop-types';

export default function Output({ billInput, totalTip }) {
 const totalBill = billInput + totalTip
  return (
      <div><strong>You pay {totalBill} (${billInput} bill+ ${totalTip} tip)</strong></div>
  )
}
Output.propTypes = {
  billInput: PropTypes.any,
  totalTip: PropTypes.number
}
