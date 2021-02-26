import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home.component";
import StudentList from "./components/StudentList/StudentList.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studentList" component={StudentList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
