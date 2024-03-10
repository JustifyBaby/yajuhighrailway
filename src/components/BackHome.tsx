import { Link } from "react-router-dom";
import { root } from "../global";

const BackHome = () => (
  <div>
    <Link to={root}>ホームへ戻る。</Link>
  </div>
);

export default BackHome;
