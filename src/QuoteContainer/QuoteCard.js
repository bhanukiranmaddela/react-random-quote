import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import "./QuoteCard.css";
const QuoteCard = () => {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color,setColor] =useState("");
  const loadApi = async () => {
    const num = Math.floor(Math.random() * 10);
   await axios
      .get("https://type.fit/api/quotes")
      .then((resp) => {
        console.log(resp.data[num]);
        setQuote(resp.data[num].text);
        setAuthor(resp.data[num].author);
        setColor(colorArray[Math.floor(Math.random() * (49- 0 + 1)) ])
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadApi();
  }, []);
  return (
    <div class="all">
        <div id="quote-text" style={{backgroundColor:`white`}}>
      <div id="text">
        <h1 style={{color:`${color}`}}>
          <span>"</span>
          {quote}
        </h1>
      </div>
      <div id="author">
        <p style={{color:`${color}`}}  >-{author}</p>
      </div>
      <div className="butt">
        <Button onClick={loadApi} style={{backgroundColor:`${color}`}} variant="contained">
          New quote
        </Button>
        <div>
            <TwitterIcon style={{color:`${color}`}} className="twitter"/>
            <ShareIcon style={{color:`${color}`}} className="share"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuoteCard;
