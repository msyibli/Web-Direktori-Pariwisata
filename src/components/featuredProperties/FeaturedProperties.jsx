import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel GranDhika</span>
        <span className="fpCity">Jakarta</span>
        <span className="fpPrice">Mulai dari Rp.950.000</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Sangat Baik</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ASTON Inn Jemursari</span>
        <span className="fpCity">Surabaya</span>
        <span className="fpPrice">Mulai dari Rp.687.000</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Luar Biasa</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Ciputra</span>
        <span className="fpCity">Jakarta</span>
        <span className="fpPrice">Mulai dari Rp.619.835</span>
        <div className="fpRating">
          <button>8.1</button>
          <span>Luar Biasa</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">HARRIS Hotel & Conventions</span>
        <span className="fpCity">Surabaya</span>
        <span className="fpPrice">Mulai dari Rp.529.200</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Luar Biasa</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
