import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Description.scss";
import Navbar from "../Navbar/Navbar";
import dot from "../Assets/Images/dot-removebg-preview.png";

export default function Description() {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const p = fetch(url);

    p.then((response) => {
      return response.json();
    }).then((data) => {
      setShow(data);
    });
  }, [id]);

  if (!show) {
    return <div style={{ margin: "auto" }}>Loading...</div>;
  }
  const genresWithDots = show.genres.join(
    `<img src="${dot}" alt="dot" className="description-dot" width="10px"> `
  );
  const backgroundColor = show.status === "Running" ? "green" : "red";
  const Readmoref = () => {
    document.getElementsByClassName(
      "description-summary-read-more-button"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "description-summary-substring-text"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "description-summary-read-less-button"
    )[0].style.display = "block";
    document.getElementsByClassName(
      "description-summary-full-text"
    )[0].style.display = "block";
  };
  const Readlessf = () => {
    document.getElementsByClassName(
      "description-summary-read-more-button"
    )[0].style.display = "block";
    document.getElementsByClassName(
      "description-summary-substring-text"
    )[0].style.display = "block";
    document.getElementsByClassName(
      "description-summary-read-less-button"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "description-summary-full-text"
    )[0].style.display = "none";
  };

  return (
    <div className="description-container">
      <canvas
        className="description-bg"
        style={{ backgroundImage: `url(${show.image?.original})` }}
      ></canvas>
      <canvas className="canvas1"></canvas>
      <Navbar />
      <div className="description-content">
        <p className="description-show-name">{show.name}</p>

        {window.innerWidth < 650 ? (
          <div className="description-details-1-mobile">
            <button
              className="description-watch-now-button-mobile"
              type="submit"
            >
              Watch Now
            </button>
            <div className="description-addtowishlist-share-mobile">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-share-from-square"></i>
            </div>
          </div>
        ) : null}
        <div className="description-summary-div">
          <p
            dangerouslySetInnerHTML={{ __html: show.summary.substring(0, 200) }}
            className="description-summary-substring-text"
          />
          <p
            className="description-summary-read-more-button"
            onClick={Readmoref}
          >
            Read more
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: show.summary }}
            className="description-summary-full-text"
          />
          <p
            className="description-summary-read-less-button"
            onClick={Readlessf}
          >
            Read less
          </p>
        </div>
        <div className="description-details-1">
          <p>IMDb {show.rating.average}</p>
          <p>{show.language}</p>
          <p>{show.premiered}</p>
          <p
            style={{
              backgroundColor: backgroundColor,
              padding: "3px 5px",
              borderRadius: "5px",
            }}
          >
            {show.status}
          </p>
        </div>
        <div className="description-details-2">
          <p dangerouslySetInnerHTML={{ __html: genresWithDots }} />
          <p>{show.type}</p>
          <p>{show.url ? <a href={show.url} className="view-more-link" target="_blank">more details</a>: null}</p>
        </div>
        {window.innerWidth > 650 ? (
          <div className="description-details-3">
            <button className="description-watch-now-button-pc" type="submit">
              Watch Now
            </button>
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-share-from-square"></i>
          </div>
        ) : null}
      </div>
    </div>
  );
}
