import {
  faAddressBook,
  faBed,
  faBowlFood,
  faCalendarDays,
  faCar,
  faMountain,
  faPerson,
  faSleigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    dewasa: 1,
    anak: 0,
    kamar: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Jasa Akomodasi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBowlFood} />
            <span>Penyedia Makan dan Minum</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSleigh} />
            <span>Daya Tarik Wisata</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountain} />
            <span>Destinasi Wisata</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Penunjang Pariwisata</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faAddressBook} />
            <span>Tentang</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Cari destinasi wisata? Ya disini.</h1>
            <p className="headerDesc">
              Dapatkan hadiah dari perjalanan Anda - Hidup hanya sekali, yok
              sediain waktu buat hibur diri
            </p>
            <button className="headerBtn">Masuk / Registrasi</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Anda ingin kemana?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.dewasa} dewasa · ${options.anak} anak-anak · ${options.kamar} kamar`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Dewasa</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.dewasa <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("dewasa", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.dewasa}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("dewasa", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Anak - anak</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.anak <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("anak", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.anak}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("anak", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Kamar</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.kamar <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("kamar", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.kamar}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("kamar", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
