import { useState } from "react";
import reactLogo from "./assets/react.svg";
import BirthdayPresent from "./component/BirthdayPresent";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BirthdayPresent></BirthdayPresent>
      </div>
    </>
  );
}

export default App;
