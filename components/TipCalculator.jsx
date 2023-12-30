import React, {useState } from 'react'
import BillInput from './BillInput';
import SelectPercentage from './SelectPercentage';
import Output from './Output';
import Reset from './Reset';

export default function TipCalculator() {
    const [billInput, setBillInput] = useState("")
    const [percentage1, setSelectPercentage1] = useState(0)
  const [percentage2, setSelectPercentage2] = useState(0)
  
    const totalTip = billInput * ((percentage1 + percentage2) /2/100)
     
  function handleReset(){
    setBillInput("")
    setSelectPercentage1(0)
    setSelectPercentage2(0)
  }

  return (
      <div>
      <BillInput billInput={billInput} onSetBillInput={setBillInput}/>
          <SelectPercentage percentage={percentage1} onSelectPercentage={setSelectPercentage1}>
          How did you like the service? 💁
          </SelectPercentage>
          <SelectPercentage percentage={percentage2} onSelectPercentage={setSelectPercentage2}> 
              How did your friend like the service? 💁‍♀️
          </SelectPercentage>
      <Output billInput={billInput} totalTip={totalTip} />
      <Reset onHandleReset={handleReset}/>
    </div>
  )
}
