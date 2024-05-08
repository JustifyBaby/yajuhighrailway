import { Link } from "react-router-dom";
import route from "../assets/yaju_routes.pdf";
import { rel } from "../global";

const RouteMap = () => {
  return (
    <div className='route'>
      <div className='iframe-wrap'>
        <iframe src={route}></iframe>
      </div>
      <div className='route-wrap'>
        <Link to='downloads' target='_blank' rel={rel}>
          PDF路線図（田所本線、空港線、新幹線）の拡大版
        </Link>
      </div>
    </div>
  );
};

export default RouteMap;
