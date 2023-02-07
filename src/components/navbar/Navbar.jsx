import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Web Direktori Pariwisata</span>
        <div className="navItems">
          <button className="navButton">Registrasi</button>
          <button className="navButton">Masuk</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
