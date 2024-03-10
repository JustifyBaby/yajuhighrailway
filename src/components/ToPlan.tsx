import { Link } from "react-router-dom"
import { root } from "../global"

const ToPlan = () => {
  return (
    <div>
      <h2>
        <Link to={`/${root}/plan`}>中射姫線計画について</Link>
      </h2>
    </div >
  )
}

export default ToPlan