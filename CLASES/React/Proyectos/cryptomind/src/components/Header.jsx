import './Header.css';

import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <div className="advertisement">
        <h3>
          La inversión en criptoactivos no está regulada, puede no ser adecuada para
          inversores minoristas y perderse la totalidad del importe invertido. Es
          importante leer y comprender los riesgos de esta inversión que se explican
          detalladamente en esta ubicación.
        </h3>
      </div>
      <div className="cm-nav-container">
        <div className="cm-logo-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676845938/crytos/Bitpanda_EN_trimmed_vntbo3.png"
            alt="logobitpanda"
          />
        </div>
        <div className="cm-navbar">
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cryptos">Cryptocurrencys</NavLink>
              <NavLink to="/nft">NFT</NavLink>
              <NavLink to="*">Markets</NavLink>
              <NavLink to="/team">Team</NavLink>
            </ul>
          </nav>
        </div>
        <div className="cm-login-container">
          {!user && <NavLink to="/login">Login</NavLink>}
          {user && <NavLink onClick={() => logout()}>Log Out</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
