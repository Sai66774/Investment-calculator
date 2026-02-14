import { useState } from "react";
import Header from "./component/Header"
import UserInput from "./component/UserInputs"
import Result from "./component/Result";


function App() {
  const [userInput, setUserInput] = useState({
    'initialInvestment': 1000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10
  });

  let isInvaildInput = false;
  function handleChange(inputIdentifer, newValue) {
    if (newValue <= 0) {
      isInvaildInput = true;
    } else {
      isInvaildInput = false;
      setUserInput(preUserInv => {
        return {
          ...preUserInv,
          [inputIdentifer]: +newValue
        }
      })
    }

  }

  return (
    <>
      <Header />
      <UserInput userInputValues={userInput} onChangeValues={handleChange} />
      {isInvaildInput? <h2> please enter valid input greater than 0 </h2> : <Result userInputValues={userInput} />}
    </>
  )
}

export default App
