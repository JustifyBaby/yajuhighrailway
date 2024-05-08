// import { Link } from "react-router-dom";
// import { rel } from "../global";
import ja from "../assets/station_ja.json";
import en from "../assets/station.json";
import { randomString } from "../rand";

type Station = {
  id: string;
  name: string;
  en: string;
};

const TimeTable = () => {
  const stas: Station[] = [];
  for (const sti in ja) {
    stas.push({
      id: randomString(32),
      name: ja[sti],
      en: en[sti],
    });
  }

  return (
    <div>
      <div className='link'>
        {/* <Link to={timetable} target='_blank' rel={rel}>
          時刻表PDF
        </Link> */}
      </div>
      <h2>駅一覧</h2>
      <ul>
        {stas.map((sta) => (
          <li key={sta.id}>
            <sub>{sta.en}</sub>
            <div>{sta.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeTable;
