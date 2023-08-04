import React from "react";
import "./Display.scss";
import { Link } from "react-router-dom";
import dot from "../Assets/Images/dot-removebg-preview.png";

export default function Display({ shows }) {
  return (
    <>
      {shows.map((show) => (
        <Link
          key={show.show.id}
          to={`/shows/${show.show.id}`}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <div className="image">
            <label htmlFor={`clicked-show-${show.show.id}`}>
              <img
                src={
                  show.show.image
                    ? show.show.image.medium
                    : "https://via.placeholder.com/210x295?text=No+Image+Available"
                }
                alt=""
              />
            </label>
          </div>
          <div className="card-details">
            <div className="details">
              <p>
                {show.show.rating.average
                  ? `${show.show.rating.average}/10`
                  : "N/A"}
              </p>
              <img src={dot} alt="" className="dot-img" />
              <p>{show.show.language}</p>
              <img src={dot} alt="" className="dot-img" />
              <p>{show.show.genres.join("/")}</p>
            </div>
            <p className="show-name" style={{ margin: 0}}>
              {show.show.name}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
