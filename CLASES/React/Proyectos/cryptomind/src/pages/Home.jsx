import './Home.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="cm-main-home">
      <div className="cm-hero-title">
        <h1>Invierte en lo que crees</h1>
        <NavLink to="/login">Start</NavLink>
      </div>
      <div className="cm-hero-foto">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676882913/crytos/current-bitcoin-logo_gv6kyb.webp"
              alt="logoBitcoin"
            />
            <span>Bitcoin</span>
            <span>22.875,20 €</span>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676882951/crytos/Tesla_Motors.svg_jlwfqq.png"
              alt="logoTesla"
            />
            <span>Tesla</span>
            <span>193,97 €</span>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676883013/crytos/gold-bar-is-motion-footage-for-documentary-films-and-cinematic-in-stock-market-scene-also-good-background-for-scene-and-titles-logo-png_gr9cyh.png"
              alt="logoGold"
            />
            <span>Gold</span>
            <span>55,48 €</span>
          </li>
        </ul>
        <img
          src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676882132/crytos/Hero_xfcggg.png"
          alt="personacontelefono"
        />
      </div>
    </main>
  );
};

export default Home;
