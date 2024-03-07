import { root } from "../global"

const ToReservate = () => {
  return (
    <div>
      <h2>
        特急券、指定席券の予約はこちら
        <br />
        <a href={`${root}/reservate`}>⇒オンラインチケット売り場</a>
      </h2>
    </div>
  )
}

export default ToReservate