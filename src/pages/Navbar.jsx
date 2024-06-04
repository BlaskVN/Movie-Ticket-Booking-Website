// import { useState, useEffect } from "react";
import '../navbar.css';
import { IoMdHome } from "react-icons/io";
function Navbar() {
  return (
    // <div className={`${sticky ? "nav" : ""}`}>
      <nav className="nav">
        <a href="/" className="site-title">LGTV</a>
        <ul>
          <li className="active"><a href="/list">Danh sách phim</a></li>
          <li className="active"><a href="/lichchieu">Lịch chiếu rạp</a></li>
          <li className="active"><a href="/newfilm">Phim mới</a></li>
          <li className="active"><a href="/incoming">Sắp ra mắt</a></li>
          <li className="active"><a href="/about">Liên hệ</a></li>
        </ul>
        <ul className="nav-right">
          <li className="active"><a href="/signin">Đăng nhập</a></li>
          <li className="active"><a href="#">Đăng ký</a></li>
          <li className="Muave"><a href="/booking">MUA VÉ</a></li>
        </ul>
      </nav>
    // </div>
  )
}

export default Navbar;