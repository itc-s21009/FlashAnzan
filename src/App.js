import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Level } from "./Level";
import "./App.css";
import { Test } from "./Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/level">
            <Level />
          </Route>
          <Route path="/easy">
            <Test digit={2} numberOfMembers={5} duration={10} />
          </Route>
          <Route path="/nomal">
            <Test digit={2} numberOfMembers={5} duration={3} />
          </Route>
          <Route path="/hard">
            <Test digit={3} numberOfMembers={5} duration={3} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// 1 => 1 ~ 9
// 2 => 10 ~ 99
// 3 => 100 ~ 999
export const generateNumber = (digit) => {
  const min = 10 ** (digit - 1)
  const max = (10 ** digit) - 1
  return digit < 1 ? -1 : Math.floor(Math.random() * (max + 1 - min)) + min
}

export default App;
