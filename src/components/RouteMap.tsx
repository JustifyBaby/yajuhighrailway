import { Link } from "react-router-dom";
import route from "../assets/dammy.pdf";
import preview from "../assets/preview.png";
import { useEffect } from "react";


const RouteMap = () => {

  useEffect(() => {
    // 初回マウント時に実行される処理
    const disableBlankLinks = () => {
      const links: Element[] = [...document.querySelectorAll('a[target="_blank"]')];
      links.map((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // クリックイベントをキャンセル
          window.open(route, '_blank', 'noopener,noreferrer'); // 新しいタブで開く
        });
      });
    };
    disableBlankLinks();
  }, []);


  return (
    <div className="route">
      <div className="iframe-wrap">
        {/* <iframe src={route} className="iframe"></iframe> */}
        <img src={preview} alt="preview" />
      </div>
      <div>

        <Link to={route} target="_blank" rel="noopener">
          PDF路線図（田所本線、空港線、新幹線）
        </Link>
      </div>
    </div >
  );
};

export default RouteMap;
