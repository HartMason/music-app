import "./App.css";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Signup } from "./components/Signup";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? <Dashboard /> : <Signup loginHandler={setIsLoggedIn}/>}
    </div>
  );
}

export default App;
