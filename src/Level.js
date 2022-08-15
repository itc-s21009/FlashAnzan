import { Link } from "react-router-dom";

export const Level = () => {
  return (
      <div>
        <h1 className="box3">難しさを選んでね</h1>
          <div className="box4">
            <Link to="/easy">
              <h2 className="size">かんたん</h2>
            </Link>
            <Link to="/nomal">
              <h3 className="size">ふつう</h3>
            </Link>
            <Link to="/hard">
              <h4 className="size">むずかしい</h4>
            </Link>
          </div>
      </div>
    );
  };
  