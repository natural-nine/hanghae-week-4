import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Add from "./Add";
import Home from "./Home";
import Update from "./Update";





function App() {
  return (
   <Router>
     <Switch>
      <Route path={"/update/:id"}><Update/></Route>
      <Route path={"/add"}><Add/></Route>
      <Route path={"/"}><Home/></Route>
     </Switch>
   </Router>
  );
}

export default App;
