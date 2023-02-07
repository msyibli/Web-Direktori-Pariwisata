import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("l")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reservasi atau Pesan Sekarang!</button>
          <h1 className="hotelTitle">Hotel GranDhika</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Jalan Iskandarsyah Raya no 65 , Blok M, Jakarta, Indonesia, 12160
            </span>
          </div>
          <span className="hotelDistance">
            Lokasi yang strategis - 500m dari Pusat Kota
          </span>
          <span className="hotelPriceHighlight">
            Dengan harga Rp.950.000 di hotek ini, Anda bisa mendapatkan layanan
            taxi bandara gratis
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
            ;
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Tetaplah berlangganan dengan Hotel GranDhika
              </h1>
              <p className="hotelDesc">
                Selain standar dari Indonesia Care, semua tamu akan mendapatkan
                Wi-Fi gratis di semua kamar dan parkir gratis jika tiba dengan
                mobil. Terletak strategis di Blok M yang merupakan bagian
                Jakarta, properti ini menempatkan Anda dekat dengan atraksi dan
                opsi restoran menarik. Jangan pulang dulu sebelum berkunjung ke
                National Monument (Monas) yang terkenal. Memiliki peringkat
                bintang-4, properti berkelas ini menyediakan akses ke kolam
                renang luar ruangan, pijat dan restoran untuk para tamu di
                properti.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Sempurna untuk bermalam 9 hari</h1>
              <span>
                Berlokasi di Pusat Kota Jakarta, hotel ini memiliki skor ulasan
                yang sempurna, yakni 9.0!
              </span>
              <h2>
                <b>Rp.950.000</b> (9 malam)
              </h2>
              <button>Reservasi atau Pesan Sekarang!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
