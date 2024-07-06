import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SurahData.css";

function SurahData() {
  let params = useParams();
  let id = params.id;
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const dataFetching = () => {
    fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.uthmani`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching surah data:", error);
        // Handle error state or display a message to the user
      });
  };

  const dataFetching2 = () => {
    fetch(`https://api.alquran.cloud/v1/surah`)
      .then((response) => response.json())
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error("Error fetching surah list:", error);
        // Handle error state or display a message to the user
      });
  };

  useEffect(() => {
    dataFetching();
    dataFetching2();
  }, [id]);

  return (
    <div className="container">
      <Link className="nav-link active" to="/juztranslation">
        Juz
      </Link>
      <div className="header-style"></div>
      <div className="mainDiv">
        <h3 onClick={toggleMenu} className="list-icon">
          ! سورۃ کا انتخاب کریں
        </h3>
        <div className={`drop-down-div ${menuVisible ? "show" : ""}`} id="menu">
          <div className="header-list-style">! سورۃ کا انتخاب کریں</div>
          <div className="cards-list">
            <div className="row">
              {data2.map((item, index) => (
                <div key={index}>
                  <Link className="Link" to={`/SurahData/${item.number}`}>
                    <div className="man-card">
                      <div className="card-number">{item.number}</div>
                      <div className="card-en-name">
                        <p className="one">{item.englishName}</p>
                        <p className="two">{item.englishNameTranslation}</p>
                      </div>
                      <div className="card-ar-name">
                        <p className="one">{item.name}</p>
                        <p className="two">
                          {item.numberOfAyahs}
                          <span> : کل آیات</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reading-aria">
          <div className="page-title">
            <ul>
              <li>
                {data?.name} : {data?.number}
              </li>
              <li>{data?.ayahs?.[0]?.page}</li>
              <li>{data?.ayahs?.[0]?.juz} : سپارہ نمبر</li>
            </ul>
          </div>
          <div className="text-main-div">
            <div className="text-area">
              {data?.ayahs?.map((item, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurahData;
