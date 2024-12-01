import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className="hero-btns">
            <a 
              href="https://www.youtube.com/watch?v=b9EkMc79ZSU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              <img src={play_icon} alt="" /> Play
            </a>
            <a 
              href="https://www.netflix.com/title/80057281" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn dark-btn"
            >
              <img src={info_icon} alt="" /> More Info
            </a>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
