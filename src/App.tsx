import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import Reservate from "./components/Reservate";
import Plan from "./components/Plan";
import NotFound from "./components/NotFound";
import { root } from "./global";
import Card from "./components/Articles/Card";
import LtdExp from "./components/Articles/LtdExp";
import ReleasedApp from "./components/Articles/ReleasedApp";
import Concept from "./components/Concept";
import TimeTable from "./components/TimeTable";
// import ShortCut from "./components/ShortCut";
import DownloadMap from "./components/DownloadMap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Title />
        {/* <ShortCut /> */}
        <Routes>
          <Route path={`${root}/`} element={<Home />} />
          <Route path={`${root}/downloads`} element={<DownloadMap />} />
          <Route path={`${root}/time-table`} element={<TimeTable />} />
          <Route path={`${root}/reservate`} element={<Reservate />} />
          <Route path={`${root}/article`} element={<Article />}>
            <Route path=':id' element={<Article />}></Route>
          </Route>
          <Route path={`${root}/concept`} element={<Concept />} />
          <Route path={`${root}/plan`} element={<Plan />} />
          <Route path={`${root}/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Article = () => {
  const params = useParams();
  const components = [<NotFound />, <Card />, <LtdExp />, <ReleasedApp />];
  let component;
  if (!components.includes(components[Number(params.id)])) {
    component = components[0];
  } else {
    component = components[Number(params.id)];
  }
  return (
    <div>
      {params.id}ページ目です。
      {component}
    </div>
  );
};

export default App;
