import { Link } from "react-router-dom"
import { root } from "../global"

const ToReservate = () => {
  return (
    <div>
      <h2>
        特急券、指定席券の予約はこちら
        <br />
        <Link to={`/${root}/reservate/`}>⇒オンラインチケット売り場</Link>
      </h2>
    </div>
  )
}

export default ToReservate