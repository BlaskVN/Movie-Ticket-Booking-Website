import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll)};
  }); // Add an empty dependency array to ensure the effect runs only once



  return (
    <div className={`${sticky ? "nav" : ""}`}>
      <nav className="nav">
        <a href="/home" className="site-title">LGTV</a>
        <ul>
          <li className="active"><a href="/list">Danh sách phim</a></li>
          <li className="active"><a href="123">Lịch chiếu rạp</a></li>
          <li className="active"><a href="#">Phim mới</a></li>
          <li className="active"><a href="#">Sắp ra mắt</a></li>
          <li className="active"><a href="/about">Liên hệ</a></li>
        </ul>
        <ul className="nav-right">
          <li className="active"><a href="/signin">Đăng nhập</a></li>
          <li className="active"><a href="#">Đăng ký</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;