import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homepage.jpg";
import "../styles/Home.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Homeowners Community</h1>
        <p> Community Success Begins with HOA</p>
        <Link to="/dashboard">
          <button> SIGN UP NOW</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;