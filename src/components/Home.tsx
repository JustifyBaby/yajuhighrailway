import { Link } from "react-router-dom";
import Deals from "./Deals";
import Operation from "./Operation";
import RouteMap from "./RouteMap";
import ToPlan from "./ToPlan";
import ToReservate from "./ToReservate";
import { root } from "../global";

const Home = () => (
  <div className="home">
    <RouteMap />
    <Operation />

    <ToReservate />
    <Link to={`/${root}/concept`}>
      企業理念
    </Link>
    <Deals />
    <ToPlan />
  </div>
);

export default Home;
