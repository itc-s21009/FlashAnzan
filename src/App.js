
// react-router-domのインポートを追加
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br />

        <Switch>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// 1 => 1 ~ 9
// 2 => 10 ~ 99
// 3 => 100 ~ 999
const generateNumber = (digit) => {
  const min = 10 ** (digit - 1)
  const max = (10 ** digit) - 1
  return digit < 1 ? -1 : Math.floor(Math.random() * (max + 1 - min)) + min
}

export default App;
