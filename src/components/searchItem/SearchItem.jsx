import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel GranDhika</h1>
        <span className="siDistance">500m dari Pusat Kota</span>
        <span className="siTaxiOp">Gratis tumpangan taxi bandara</span>
        <span className="siSubtitle">
          Hotel berkelas dengan kolam renang yang megah
        </span>
        <span className="siFeatures">
          Fasilitas • 1 kamar tidur • 21m² 1 kasur King Size
        </span>
        <span className="siCancelOp">Bisa dibatalkan </span>
        <span className="siCancelOpSubtitle">
          Anda bisa membatalkannya nanti
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Sangat Bagus</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rp.950.000</span>
          <span className="siTaxOp">Termasuk pajak dan biaya</span>
          <button className="siCheckButton">Lihat ketersediannya</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
