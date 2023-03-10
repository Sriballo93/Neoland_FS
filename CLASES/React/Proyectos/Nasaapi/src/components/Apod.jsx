import React from "react";
import { useState, useEffect, useRef } from "react";
import Figure from "./Figure";
import axios from "axios";
import "./_apod.css";

const Apod = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const inputDate = useRef("null");
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "h17pNL6gFQy94O8jwi0qYZ9YbJ0HdlfM8LRFK2JQ";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };

    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };


  const handleNextBtn = () => {
    let selectedDate = new Date(inputDate.current.value);
    selectedDate.setDate(selectedDate.getDate() + 1);
    inputDate.current.value = selectedDate.toISOString().slice(0, 10);
    setDate(inputDate.current.value);
    
    
   
  };

  const handlePrevBtn = () => {
    let selectedDate = new Date(inputDate.current.value);
    selectedDate.setDate(selectedDate.getDate() - 1);
    inputDate.current.value = selectedDate.toISOString().slice(0, 10);
    setDate(inputDate.current.value);
    
    
   
  };

  return (
    <div className="apodContainer">
      <h1>Astronomy Picture of the Day</h1>
      <div className="inputContainer">
        <button
          aria_label="Close"
          className="close"
          onClick={() => handlePrevBtn()}
        >
          Prev
        </button>
        <input
          type="date"
          ref={inputDate}
          id="photo_date"
          min="1995-06-19"
          max={today}
          onChange={handleInput}
        />
        <button
          aria_label="Resize"
          className="resize"
          onClick={() => {
            handleNextBtn();
            
          }}
        >
          Next
        </button>
      </div>
      {date > today ? (
        <h4> Please choose a previous date</h4>
      ) : (
        <Figure data={apod} />
      )}
    </div>
  );
};

export default Apod;
