import React from "react";
// import "./Slider.scss";
import leftArrow from "./../images/leftArrow.png"
import rightArrow from "./../images/rightArrow.png"

export default function btnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}