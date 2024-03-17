import { Link } from "react-router-dom"

const ToReservate = () => {
  return (
    <div>
      <h2>
        特急券、指定席券の予約はこちら
        <br />
        <Link to={`reservate/`}>⇒オンラインチケット売り場</Link>
      </h2>
    </div>
  )
}

export default ToReservate