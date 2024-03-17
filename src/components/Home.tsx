import { Link } from "react-router-dom";
import Deals from "./Deals";
import Operation from "./Operation";
import RouteMap from "./RouteMap";
import ToPlan from "./ToPlan";
import ToReservate from "./ToReservate";

const Home = () => (
  <div className="home">
    <Operation />
    <RouteMap />
    <ToReservate />

    <div>
      <Link to={`concept`}>
        企業理念
      </Link>
    </div>
    <div>
      <Link to={`time-table`}>駅・時刻表</Link>
    </div>
    <Deals />
    <ToPlan />
  </div>
);

export default Home;
