import { Link } from "react-router-dom"
import { root } from "../global"

const NotFound = () => {
  return (
    <div lang="en">
      <h1>404 NOT FOUND</h1>
      <p>Is there you'd like to find in this list?</p>
      <ul>
        <Link to={root}>ホーム</Link>
        <Link to={`/${root}/reservate`}>オンラインチケット売り場</Link>
        <Link to={`/${root}/plan/`}>中射姫線計画について</Link>
      </ul>
    </div>
  );
};

export default NotFound