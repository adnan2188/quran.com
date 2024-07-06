import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JuzNames from "./JuzNames";
import { useParams } from "react-router-dom";
function SurahData() {
  let params = useParams();
  let id = params.id;
  const [data, setData] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const dataFetching = () => {
    fetch(`https://api.alquran.cloud/v1/juz/${id}/ar.uthmani`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    dataFetching();
  }, [id]);
  return (
    <div className="contaner">
      <div className="header-style"></div>
      <div className="mainDiv">

        {/* Show the card of juz on the screen md/sm/lg */}
        <h3 onClick={toggleMenu} className="list-icon">
          ! سپارہ کا انتخاب کریں
        </h3>
        <div className={`drop-down-div ${menuVisible ? "show" : ""}`} id="menu">
          <div className="header-list-style">! سپارہ کا انتخاب کریں</div>
          <div className="cards-list">
            <div className="row">
              {JuzNames.map((item, index) => (
                <Link className="Link" to={`/JuzData/${item.number}`}>
                  <div key={index} className="card">
                    <div className="card-body main-card">
                      <div className="juz-number">{item.number}</div>
                      <div className="juz-name">{item.name}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* show the data of juz after fetching the juz data from api */}
        <div className="reading-aria">
          <div className="page-title">
            <ul>
              <li>
                {data?.ayahs?.[0]?.surah?.name} : {data?.number}
              </li>
              <li>{data?.ayahs?.[0].page}</li>
              <li>{data?.ayahs?.[0].juz} : سپارہ نمبر</li>
            </ul>
          </div>
          <div className="text-main-div">
            <div className="text-area">
              {data?.ayahs?.map((item, index) => (
                <>
                  <span
                    key={index}
                    style={{
                      lineHeight: "45px",
                      fontSize: "25px",
                      fontFamily: "Al Majeed Quranic Font",
                      borderBottom: "2px solid black",
                    }}
                  >
                    {item.text}
                    <span
                      style={{
                        fontSize: "15px",
                        border: "solid 1px black",
                        padding: "0px 3px",
                        margin: "3px",
                        borderRadius: "50px",
                        fontWeight: "900",
                        fontFamily: "arial",
                      }}
                    >
                      {item.numberInSurah}
                    </span>
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default SurahData;
