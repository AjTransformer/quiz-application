import React from 'react'
import { useContext } from 'react'
import {myBox} from '../App'

function Homepage() {

    const {ss} = useContext(myBox);

    function startquiz(){
        ss("question")
    }

  return (
    <div>
      <button onClick={startquiz}>Start Quiz</button>
    </div>
  )
}

export default Homepage
