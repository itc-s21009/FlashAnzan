import { Home } from "./Home";
import { Level } from "./Level";
import "./App.css";
import { Test } from "./Test";
import {createContext, useState} from "react";

export const ScreenContext = createContext(0)
export const SCREEN_HOME = 0
export const SCREEN_LEVEL = 1
export const SCREEN_EASY = 2
export const SCREEN_NORMAL = 3
export const SCREEN_HARD = 4

const SCREENS = {
  [SCREEN_HOME]: <Home />,
  [SCREEN_LEVEL]: <Level />,
  [SCREEN_EASY]:  <Test digit={2} numberOfMembers={5} duration={10} />,
  [SCREEN_NORMAL]: <Test digit={2} numberOfMembers={5} duration={3} />,
  [SCREEN_HARD]: <Test digit={3} numberOfMembers={5} duration={3} />
}

function App() {
  const [screen, setScreen] = useState(0)
  const Screen = () => SCREENS[screen]
  return (
      <>
        <ScreenContext.Provider value={setScreen}>
          <Screen />
        </ScreenContext.Provider>
      </>
  )
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
