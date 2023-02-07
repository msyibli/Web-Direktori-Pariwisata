import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.inews.co.id/media/800/files/inews_new/2021/07/21/penutupan_gunung_bromo_dan_semeru.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jawa Timur</h1>
          <h2>150 Properti</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn-cms.pgimgs.com/areainsider/2021/02/Alt-Text-Provinsi-Jawa-Tengah-e1614180186992.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jawa Tengah</h1>
          <h2>167 Properti</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.pesisir.net/wp-content/uploads/2020/11/Pulau-Nusa-Tenggara-Barat.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nusa Tenggara Barat</h1>
          <h2>125 Properti</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
