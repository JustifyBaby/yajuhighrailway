import { Link } from "react-router-dom";
import timetable from "../assets/dammy.pdf"
import stas from "../timetable.json"
import { rel } from "../global";

const TimeTable = () => {
  return (
    <div>
      <div className="link">
        <Link to={timetable} target="_blank" rel={rel}>時刻表PDF</Link>
      </div>
      <ul>
        駅一覧
      </ul>
      <ul>
        特急
        {stas.map((sta) => (
          <li>{sta.sta}</li>
        ))}
      </ul>
    </div>
  )
}

export default TimeTable;