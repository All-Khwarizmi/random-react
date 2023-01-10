import React from "react";
import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import TwitterLink from "./TwitterLink";
import { IconContext } from "react-icons";

const QuoteBox = () => {
  const [color, setColor] = useState("red");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let url = `https://twitter.com/intent/tweet?hashtags=quotes&text=${quote}%20${author}`;

  useEffect(() => {
    const getQuote = async () => {
      clickHandler();
    };
    getQuote();
  }, []);

  const clickHandler = async () => {
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);

    const randomColor = () => {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let color = `rgb(${r}, ${g}, ${b})`;
      setColor(color);
    };
    randomColor();
  };
  return (
    <IconContext.Provider
      value={{ color: color, className: "global-class-name" }}
    >
      <div style={{ "background-color": color }} className="App">
        <div id="quote-box" className="quote-box">
          <div className="div-quote-text">
            <p id="text" style={{ color: color }} className="quote-text" >
              <FaQuoteLeft style={{ display: "inline" }} />{" "}
              {quote ? quote : "Carpe diem"}
            </p>

            <p id="author" style={{ color: color }} className="quote-author">
              {author ? author : "Anonymous"}{" "}
            </p>
          </div>
          <div className="div-quote-link">
            <div >
              <TwitterLink url={url} />
            </div>
            <div>
              <button id="new-quote"
                style={{ "background-color": color }}
                className="quote-button"
                onClick={clickHandler}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default QuoteBox;
