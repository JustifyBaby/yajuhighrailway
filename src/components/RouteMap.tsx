import { Link } from "react-router-dom";
import route from "../assets/dammy.pdf";


const RouteMap = () => {
  return (
    <div className="route">
      <div>
        <iframe src={route}></iframe>
      </div>
      <div>

        <Link to={route} target="_blank" rel="noopener">
          PDF路線図（田所本線、空港線、新幹線）
        </Link>
      </div>
    </div >
  );
};

export default RouteMap;
