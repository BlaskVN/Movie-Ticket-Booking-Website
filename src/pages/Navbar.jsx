// import { useState, useEffect } from "react";
import '../navbar.css';
function Navbar() {


  return (
    // <div className={`${sticky ? "nav" : ""}`}>
      <nav className="nav">
        <a href="/" className="site-title">LGTV</a>
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
    // </div>
  )
}

export default Navbar;