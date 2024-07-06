import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SurahCards.css";

function SurahCards() {
  const [data, setData] = useState([]);

  const dataFetching = () => {
    fetch(`https://api.alquran.cloud/v1/surah`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch surah data");
        }
        return response.json();
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching surah data:", error);
        // Handle error state or display a message to the user
      });
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="container text-center">
      <h1>The Noble Quran</h1>
      <div className="col-lg-12 col-md-12 col-sm-12 main-div">
        <div className="col-lg-1 col-md-3 col-sm-3 Card">
          <Link className="nav-link active" to="/SurahCards">
            Surah
          </Link>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-3 Card">
          <Link className="nav-link active" to="/JuzCards">
            Juz
          </Link>
        </div>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link className="Link" to={`/SurahData/${item.number}`}>
              <div className="main-card">
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
  );
}

export default SurahCards;
