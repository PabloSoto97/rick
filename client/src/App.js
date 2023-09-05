import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar/NavBar";
import { Home, Form, Detail, Landing } from "./views";
import { Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "rick-production.up.railway.app/";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/home" component={Home} />

      <Route exact path="/" component={Landing} />

      <Route exact path="/morty/:id" component={Detail} />

      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
