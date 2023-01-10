import { useState } from "react";
import { createContext, useContext } from "react";

const useClickHandler = async () => {
  const [color, setColor] = useState("red");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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

  const state = {
    color,
    author,
    quote,
  };
  return state;
};
