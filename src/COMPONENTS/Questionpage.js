import React, { useContext, useState } from 'react'
import { myBox } from '../App'

const questionList= [
    {
        title: "What is the use of React?",
        A: "It is used in server side programming",
        B: "It is used to create attractive user interfaces",
        C: "Both A and B",
        D: "None of the Above",
        Answer: "B"
      },
      {
        title: "What is 10+20",
        A: 300,
        B: -10,
        C: 30,
        D: 40,
        Answer: "C"
      },
      {
        title: "What is 1000 * 3",
        A: 3000,
        B: 60,
        C: -456,
        D: -560,
        Answer: "A"
      },
      {
        title: "Trignometry comes in which subject?",
        A: "Biology",
        B: "Maths",
        C: "Social Science",
        D: "English",
        Answer: "B"
      }
]


function Questionpage() {
    const {ss , ms , sc}  = useContext(myBox)
    const [questionNo , setQuesionNo] = useState(0)
    const [answerChoosen , setAnswerChoosen] = useState(0)

    function nextQuestion(){
        if(questionList[questionNo].Answer == answerChoosen){
            sc(ms+1)
        }
        setQuesionNo(questionNo+1)
    }

    function getScore(){
        if(questionList[questionNo].Answer == answerChoosen){
            sc(ms+1)
        }
        ss("result")
    }
  return (
    <div>
      <h1>Q.{questionList[questionNo].title}</h1>
      A.<button type="button" className="btn btn-outline-primary" onClick={function(){
        setAnswerChoosen("A")
      }}>{questionList[questionNo].A}</button><br/><br/>
      B.<button type="button" className="btn btn-outline-primary" onClick={function(){
        setAnswerChoosen("B")
      }}>{questionList[questionNo].B}</button><br/><br/>
      C.<button type="button" className="btn btn-outline-primary" onClick={function(){
        setAnswerChoosen("C")
      }}>{questionList[questionNo].C}</button><br/><br/>
      D.<button type="button" className="btn btn-outline-primary" onClick={function(){
        setAnswerChoosen("D")
      }}>{questionList[questionNo].D}</button><br/><br/>
      {questionNo<questionList.length-1 ? <button type="button" className="btn btn-success" onClick={nextQuestion}>Continue</button> : <button type="button" className="btn btn-warning" onClick={getScore}>Finish</button>}
    </div>
  )
}

export default Questionpage
