import "./App.css";
import ButtonAppBar from "./NavBar";
import Signup from "./Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <div className="App">
    <ButtonAppBar/>
    {isLoggedIn ? <Dashboard/> : <Signup/>}
  </div>;
}

export default App;
