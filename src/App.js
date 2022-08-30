import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";

function App() {

  const [logInState,setLogInState] = useState(false)
  
  const getLogInBoolean = (booleanFromNav) => {
    setLogInState(booleanFromNav)
  }

  console.log('app render')

  return (
    <>
      <Nav getLogInBoolean={getLogInBoolean} />
      {!logInState && <Welcome />}
    </>
  );
}

export default App;
