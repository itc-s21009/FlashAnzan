import {useContext} from "react";
import {SCREEN_LEVEL, ScreenContext} from "./App";

export const Home = () => {
    const setScreen = useContext(ScreenContext)
    return (
        <div>
            <h1 className="box">暗算ゲーム</h1>
            <h2 className="box2 btn" onClick={() => setScreen(SCREEN_LEVEL)}>難易度選択</h2>
        </div>
    );
};
