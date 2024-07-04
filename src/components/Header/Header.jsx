// header
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Header/Header.scss';

import { ReactComponent as Book } from '../../assets/Header/Book.svg';
import { ReactComponent as Person } from '../../assets/Header/Person.svg';
import { ReactComponent as Friends } from '../../assets/Header/Friends.svg';

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="main-logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
              {/* 로고 이미지 클릭시 홈으로 이동 */}
            </Link>
          </div>
          <div className="icon-container">
            <div className="header-btns">
              <Link to="#" className="header-link">
                <Book className="icon" />
              </Link>
              <Link to="#" className="header-link">
                <span className="header-txt">New</span>
              </Link>
            </div>
            <div className="header-btns">
              <Link to="#" className="header-link">
                <Friends className="icon" />
              </Link>
              <Link to="#" className="header-link">
                <span className="header-txt">Friends</span>
              </Link>
            </div>
            <div className="header-btns">
              <Link to="/MyPage" className="header-link">
                <Person className="icon" />
              </Link>
              <Link to="/MyPage" className="header-link">
                <span className="header-txt">My Page</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
