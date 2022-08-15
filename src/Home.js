import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className="box">暗算ゲーム</h1>
      <Link to="/level">
        <h2 className="box2">難易度選択</h2>
      </Link>
    </div>
  );
};
