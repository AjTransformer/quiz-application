import './App.css';
import { createContext, useState } from 'react';
import Homepage from './COMPONENTS/Homepage';
import Questionpage from './COMPONENTS/Questionpage'; // Corrected import
import Result from './COMPONENTS/Result'; // Corrected import

export const myBox = createContext();

function App() {
  const [stage, setStage] = useState("home")
  const [score , setScore] = useState(0)

  return (
    <div>
      <myBox.Provider value={ {ss:setStage ,ms:score,sc:setScore}}>
        { stage == "home" && <Homepage/>}
        { stage == "question" && <Questionpage/>}
        {stage == "result" && <Result/>}
      </myBox.Provider>
    </div>
  );
}

export default App;
