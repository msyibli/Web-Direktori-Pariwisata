import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Hemat waktu, hemat uang!</h1>
      <span className="mailDesc">
        Masuk dan kita akan tawarkan rekomendasi wisata terbaik untuk Anda
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email Anda" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
