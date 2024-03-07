import BackHome from "./BackHome"

const Plan = () => {
  return (
    <div>
      <h2>設置駅計画</h2>
      <div className="station">
        <p>
          <ul>
            <li>遠野 "Tono"（田所本線との分岐駅）</li>
            <li>拓哉 "Takuya"（新駅として開業予定。）</li>
            <li>羽禍 "Wakka"（貨物ターミナルに旅客設備を設置して開業予定）</li>
            <li>踊乃戸 "Odonoko"（新駅として開業予定。）</li>
            <li>
              中射姫 "Nakaiki"（貨物ターミナルに旅客設備を設置して開業予定）
            </li>
          </ul>

          <p>新駅開業は3駅のみ→コスト低減。</p>
        </p>
      </div>

      <h2>ダイヤ（予定）</h2>
      <p>
        1時間に1〜2本、6両編成の各駅停車のみの運行。伊井予恋夜～遠野間で田所本線と直通運転。
      </p>

      <div className="ps">
        <p>
          追記：第３次交渉の結果、中射姫止まりの路線となる可能性が高くなりました。
        </p>
      </div>
      <BackHome />
    </div>
  )
}

export default Plan