import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <header>
  <nav>
  <ul class="nav1">
    <li ><a href="https://www.chelseafc.com/en/chelsea-foundation">CHELSEA FOUNDATION</a></li>
    <li><a href="https://www.chelseafc.com/en/no-to-hate">NO TO HATE</a></li>
    <li><a href="#signin">SIGN IN</a></li>
    <li><a href="#register">REGISTER</a></li>
  </ul>
  </nav>
  <nav>
  <ul class="nav2">
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#Tranfers">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
  </nav>
  </header>
  <main>
  <h1>
      <img class="pequeña" src="https://upload.wikimedia.org/wikinews/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png" alt="LogoChelsea">
     Winter Transfer Window
  </h1>
  </main>
  <section>
    <ul>
        <li class="card">
          <img class="grande" src="https://pbs.twimg.com/media/FlE7dYGXkAE1vhE?format=jpg&name=900x900" alt="DavidFofanafoto">
            <h3>David Datro Fofana </h3>
            <p>20 años</p>
              <p>12.00M €</p>
              <img class="pequeña" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1024px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="LogoFrancia">
          </li>
          <li class="card">
          <img class="grande" src="https://i2-prod.manchestereveningnews.co.uk/incoming/article25990710.ece/ALTERNATES/s1200c/0_Benoit-Badiashile.jpg" alt="benoitfoto">
            <h3>Benoit Badiashile </h3>
            <p>21 años</p>
              <p>37.00M €</p>
              <img class="pequeña" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1024px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="LogoFrancia">
          </li>
          <li class="card">
          <img class="grande" src="https://imgsrv2.voi.id/QGNAxIdgG4BOPhqtq_iAHfz4a_ZK-GzUq1J3p23LF-w/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yNDUwMDIvMjAyMzAxMTYxMzEwLW1haW4uY3JvcHBlZF8xNjczODQ5NDUzLkpQRw.jpg" alt="Mudrykfoto">
            <h3>Mykhailo Mudryk</h3>
            <p>22 años</p>
              <p>70.00M €</p>
              <img class="pequeña" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png" alt="LogoUcrania">
          </li>
           <li class="card">
           <img class="grande" src="https://www.soyfutbol.com/__export/1673439366437/sites/debate/img/2023/01/11/joao_felix_chelsea.jpg_242310155.jpg" alt="Felixfoto">
            <h3>Joao Felix </h3>
            <p>23 años</p>
              <p>Cesion</p>
              <img class="pequeña" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png" alt="LogoPortugal">
          </li>
          <li class="card">
          <img class="grande" src="https://pbs.twimg.com/media/FlZvJFxWQAEYGKb.jpg:large" alt="Andreyfoto">
            <h3>Andrey Nacimientos Dos Santos </h3>
            <p>18 años</p>
              <p>12.50M €</p>
              <img class="pequeña" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png" alt="LogoBrazil">
          </li>
      </ul>
  </section>
  <footer>
      <div class="container">
        <p class="footer">
          <a class="footer" href="#contact">Made by <strong> Sebastian Riballo</strong>			</a>
          </p>
        <img href="https://twitter.com/"class="pequeña"src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png" alt="LogoTwiter">
          <img href="https://www.linkedin.com/in/sebastian-riballo-herrera-a862b5180/" class="pequeña" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="LogoLindkedin">
          </div>
  </footer>
  </div>
`

setupCounter(document.querySelector('#counter'))
