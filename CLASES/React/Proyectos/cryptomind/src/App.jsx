import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Cryptos from './pages/Cryptos';
import Home from './pages/Home';
import Login from './pages/Login';
import NFT from './pages/NFT';
import NotFound from './pages/NotFound';

// import axios from 'axios';
// import { useEffect, useState } from 'react';

const App = () => {
  // const [coin, setCoin] = useState({});

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const options = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-access-token': 'coinrankingbea48d9e1a8be9a57714939c6742332605f6012eb7813087',
  //       },
  //     };
  //     const res = await axios.get('https://api.coinranking.com/v2/coins', options);

  //     setCoin(res);
  //     console.log(res);
  //   };
  //   getInfo();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/cryptos"
          element={
            <ProtectedRoute>
              <Cryptos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nft"
          element={
            <ProtectedRoute>
              <NFT />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
