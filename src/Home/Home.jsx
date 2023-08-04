import React, { useState, useEffect } from "react";
import "./Home.scss";
import profile from "../Assets/Images/image-avatar.png";
import Display from "../Display/Display";
import Trending from "../Trending/Trending";
import Searchbar from "../Searchbar/Searchbar";

export default function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <nav>
        <div className="navbar">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-tv"></i>
          <i className="fa-solid fa-bookmark"></i>
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="profile-div">
          <img src={profile} alt="profile" />
        </div>
      </nav>
      <section className="content">
        <Searchbar />
        <section className="trending">
          <p className="trending-text">Trending</p>
          <div className="trending-div">
            <Trending />
          </div>
        </section>
        <section className="all-shows">
          <p className="all-shows-text">All Shows</p>
          <div className="all-shows-div">
            <Display shows={shows} />
          </div>
        </section>
      </section>
    </div>
  );
}
