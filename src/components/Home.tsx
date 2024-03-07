import Deals from "./Deals";
import Operation from "./Operation";
import RouteMap from "./RouteMap";
import ToPlan from "./ToPlan";
import ToReservate from "./ToReservate";

const Home = () => (
  <div className="home">
    <RouteMap />
    <Operation />
    <ToReservate />
    <Deals />
    <ToPlan />
  </div>
);

export default Home;
