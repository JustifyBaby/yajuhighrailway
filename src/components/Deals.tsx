import { Link } from "react-router-dom"
// import BackHome from "./BackHome"
import { root } from "../global"

const Deals = () => {
  return (
    <div>
      <h2>お得な情報</h2>
      <ul>
        <li>
          <Link to={`/${root}/article/1`}>
            ついに、当社独自のICカードを開発!
          </Link>
        </li>

        <li>
          <Link to={`/${root}/article/2`}>
            野獣県の旅は特急「ゆめ」！ 旅行の日は少し贅沢しませんか？
          </Link>
        </li>

        <li>
          <Link to={`/${root}/article/3`}>
            野獣高速交通社公式アプリ「Senpai」がリリース。
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Deals