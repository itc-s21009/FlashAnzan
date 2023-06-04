import {useContext} from "react";
import {SCREEN_EASY, SCREEN_HARD, SCREEN_NORMAL, ScreenContext} from "./App";

export const Level = () => {
    const setScreen = useContext(ScreenContext)
    return (
        <div>
            <h1 className="box3">難しさを選んでね</h1>
            <div className="box4">
                <h2 className="size btn" onClick={() => setScreen(SCREEN_EASY)}>かんたん</h2>
                <h3 className="size btn" onClick={() => setScreen(SCREEN_NORMAL)}>ふつう</h3>
                <h4 className="size btn" onClick={() => setScreen(SCREEN_HARD)}>むずかしい</h4>
            </div>
        </div>
    );
};
