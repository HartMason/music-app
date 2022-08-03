import "./App.css";
import ButtonAppBar from "./NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <div className="App">
    <ButtonAppBar/>
    {isLoggedIn ? <Dashboard/> : <Signup/>}
  </div>;
}

export default App;
