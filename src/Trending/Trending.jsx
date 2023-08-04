import React, { useState } from "react";
import Beyond_earth from "../Assets/Images/beyond_earth.jpg";
import undiscovered_cities from "../Assets/Images/undiscovered_cities.jpg";
import bottom_gear from "../Assets/Images/bottom_gear.jpg";
import "./Trending.scss";
import dot from "../Assets/Images/dot-removebg-preview.png";

export default function Trending() {
  const [data, setdata] = useState([
    {
      score: 5.5,
      show: {
        name: "Beyond Earth",
        url: Beyond_earth,
        genres: ["comedy"],
        language: ["English"],
      },
      bookmarked: false,
    },
    {
      score: 7.5,
      show: {
        name: "Undiscovered Cities",
        url: undiscovered_cities,
        genres: ["action"],
        language: ["English, Hindi"],
      },
      bookmarked: false,
    },
    {
      score: 5.2,
      show: {
        name: "Bottom gear",
        url: bottom_gear,
        genres: ["comedy"],
        language: ["Japanese"],
      },
      bookmarked: false,
    },
  ]);

  const bookmark = (index) => {
    const updatedData = [...data];
    updatedData[index].bookmarked = true;
    setdata(updatedData);
  };

  const bookmarked = (index) => {
    const updatedData = [...data];
    updatedData[index].bookmarked = false;
    setdata(updatedData);
  };

  return (
    <>
      {data.map((show, index) => (
        <div
          className="trending-card"
          key={index}
          style={{
            backgroundImage: `url(${show.show.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="trending-bookmark-icon">
            {show.bookmarked ? (
              <i className="fa-solid fa-bookmark bookmarked" onClick={() => bookmarked(index)}></i>
            ) : (
              <i className="fa-regular fa-bookmark bookmark" onClick={() => bookmark(index)}></i>
            )}
          </div>
          <div className="trending-description">
            <div className="trending-details">
              <p style={{ margin: 0 }}>{show.score}/10</p>
              <img src={dot} alt="" className="dot-img" />
              <p style={{ margin: 0 }}>{show.show.genres.join("/")}</p>
              <img src={dot} alt="" className="dot-img" />
              <p style={{ margin: 0 }}>{show.show.language.join("/")}</p>
            </div>
            <p className="trending-show-name" style={{ margin: 0 }}>
              {show.show.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
