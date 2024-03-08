import route from "../assets/yaju-route-ver11.pdf";

const RouteMap = () => {
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


export default RouteMap;
