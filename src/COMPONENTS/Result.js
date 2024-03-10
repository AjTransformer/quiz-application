import React from 'react'
import { myBox } from '../App'
import { useContext } from 'react'


function Result() {
    const {ss , ms , sc}  = useContext(myBox)
  return (
    <div>
      <p>Your Score is {ms}</p>
    </div>
  )
}

export default Result
