import style from './Juz_translation.module.css';
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useReactToPrint } from 'react-to-print';
import { FaCopy } from "react-icons/fa";
import { IoPrint } from "react-icons/io5";
function Juz_translation() {
    let params = useParams();
    let id = params.id;
    const [quranData, setQuranData] = useState([]);
    const [englishQuranData, setEnglishQuranData] = useState([]);
    const [urduQuranData, setUrduQuranData] = useState([]);
    // const [showTranslation, setShowTranslation] = useState(true); // State to track translation visibility
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    //fetching the arabic data
    const quranDataFetching = () => {
        fetch(`https://api.alquran.cloud/v1/juz/${id}/ar.uthmani`)
            .then((response) => response.json())
            .then((response) => {
                setQuranData(response.data);
            });
    };
    //fetching the english translation data
    const englishTranslationDataFetching = () => {
        fetch(`https://api.alquran.cloud/v1/juz/${id}/en.ahmedali`)
            .then((response) => response.json())
            .then((response) => {
                setEnglishQuranData(response.data);
            });
    };
    //fetching the urdu translation data
    const urduTranslationDataFetching = () => {
        fetch(`https://api.alquran.cloud/v1/juz/${id}/ur.jawadi`)
            .then((response) => response.json())
            .then((response) => {
                setUrduQuranData(response.data);
            });
    };



    useEffect(() => {
        quranDataFetching();
        englishTranslationDataFetching();
        urduTranslationDataFetching();
    }, []);
    return (

        <div style={{ height: "85vh", overflowY: "scroll" }}>
            {/* Checkbox for translation
            <label>
                Show Translation
                <input
                    type="checkbox"
                    checked={showTranslation}
                    onChange={() => setShowTranslation(!showTranslation)}
                />
            </label> */}
            {quranData?.ayahs?.map((item, index) => (
                <>
                    <div className="row"
                        style={{ borderBottom: "solid 1px #eceef0", margin: "2% 12%" }}>
                        <div className="col-lg-1 col-md-2 col-sm-12"
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "left"
                            }}>
                            <hinttagge title="Ayah number in surah">
                                {item?.surah?.number}:{item.numberInSurah}
                            </hinttagge>
                            <br />
                            <hinttagge title="Copy The Ayah">
                                <CopyToClipboard text={item.text + urduQuranData?.ayahs?.[index]?.text + englishQuranData?.ayahs?.[index]?.text}>
                                    <FaCopy />
                                </CopyToClipboard>
                            </hinttagge>
                            <br />
                            <hinttagge title="Print The Ayah">
                                <p onClick={handlePrint}>
                                    <IoPrint />
                                </p>
                            </hinttagge>
                        </div>

                        <div ref={printRef} className="col-lg-11 col-md-10 col-sm-12"
                            style={{
                                minHeight: "300px",
                                padding: "1px 20px",
                                paddingRight: "0px"
                            }}>
                            {/* Quran in Arabic displaying here */}
                            <div
                                style={{
                                    minheight: "100px",
                                    padding: "10px",
                                    paddingRight: "0px",
                                    display: "flex",
                                    justifyContent: "right",
                                    alignItems: "center",
                                }}>
                                <h1 className={style.arfont}>
                                    {item.text}
                                    <span className={style.arfont_ayah_number}>{item.numberInSurah}</span>
                                </h1>
                            </div>

                            {/* Quran in urdu displaying here */}
                            <div>
                                <h1
                                    style={{
                                        minheight: "100px",
                                        fontFamily: "Jameel Noori Nastaleeq",
                                        fontWeight: " 400",
                                        lineHeight: "30px",
                                        fontSize: "19px",
                                        direction: "rtl",
                                        textAlign: "right",
                                        display: "flex",
                                        justifyContent: "right",
                                        alignItems: "center",
                                        padding: "10px",
                                        paddingRight: "0px",
                                    }}>{urduQuranData?.ayahs?.[index]?.text}۔</h1>
                            </div>

                            {/* Quran in english dispalying here */}
                            <div>
                                <h1
                                    style={{
                                        minheight: "100px",
                                        fontFamily: "ProximaVara",
                                        fontWeight: " 400",
                                        lineHeight: "30px",
                                        fontSize: "19px",
                                        direction: "ltr",
                                        textAlign: "left",
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        padding: "10px",
                                        paddingRight: "0px",
                                        marginTop: "-8px"
                                    }}>{englishQuranData?.ayahs?.[index]?.text}</h1>
                            </div>

                        </div>
                    </div >


                </>
            ))
            }




        </div >
    )
}
export default Juz_translation;































