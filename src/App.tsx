import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import Home from './components/Home'
import Reservate from './components/Reservate'
import Articles from './components/Articles'
import Plan from './components/Plan'
import NotFound from './components/NotFound'
import BackHome from './components/BackHome'
import Card from './components/Articles/Card'
import ReleasedApp from './components/Articles/ReleasedApp'
import LtdExp from './components/Articles/LtdExp'
import { root } from './global'

function App() {
  return (
    <div>
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path={`${root}/`} element={<Home />} />
          <Route path={`${root}/reservate`} element={<Reservate />} />
          <Route path={`${root}/article`} element={<Articles />}>
            <Route path=":id" element={<Article />}></Route>
          </Route>
          <Route path={`${root}/plan`} element={<Plan />} />
          <Route path={`${root}/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Article = () => {
  const params = useParams();
  console.log(params.id, typeof Number(params.id));
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
      <BackHome />
    </div>
  );
};

export default App
