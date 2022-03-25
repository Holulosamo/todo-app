import { useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";

export default function ThemeButton(){
    return (
      <button className="theme-btn">
        <img src={moonIcon} />
      </button>
    );
}