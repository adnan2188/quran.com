import { Link } from "react-router-dom";
import "./JuzCards.css";
import JuzNames from "./JuzNames";

function JuzCards() {
  return (
    <div className="container">
      <h1>The Noble Quran</h1>
      <div className=" col-lg-12 col-md-12 col-sm-12 main-div">
        <div className=" col-lg-1 col-md-3 col-sm-3 Card">
          <Link className="nav-link active" to="/SurahCards">
            Surah
          </Link>
        </div>
        <div className=" col-lg-1 col-md-3 col-sm-3 Card">
          <Link className="nav-link active" to="/JuzCards">
            Juz
          </Link>
        </div>
      </div>
      <div className="row">
        {JuzNames.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link className="Link" to={`/JuzData/${item.number}`}>
              <div className="card">
                <div className="card-body main-card">
                  <div className="juz-number">{item.number}</div>
                  <div className="juz-name">{item.name}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JuzCards;
