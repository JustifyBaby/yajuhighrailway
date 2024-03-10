import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { root } from "../global";

const Title = () => {

  return (
    <div>
      <Link to={root} className="title">
        <img src={logo} alt="logo" />
        <h1>野獣高速交通社（公式）</h1>
      </Link>
    </div>
  );
};

export default Title;
