import { useEffect } from "react";
import route from "../assets/yaju-route-ver11.pdf";


const RouteMap = () => {
  useEffect(() => {
    window.location.href = "/";
  }, []);
  return (
    <div className="route">
      <div>
        <iframe src={route}></iframe>
      </div>
      <div>
        <a href={route} target="_blank" rel="noopener">
          PDF路線図（田所本線、空港線、新幹線）
        </a>
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 20cb85d03d8025cbf62ca6559417e5d90ed94df4


export default RouteMap;
