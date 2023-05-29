import React from "react";
import "./chat.css";
import { Popover } from "@mui/material";
export default function Chat({ owner, createdDte, text, id, currentUser }) {
  function convert(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }
  return (
    <div className="convert">
      <div className="wrapper-convert">
        <span className="convert-title">
          {id == currentUser.id ? "You" : owner}
        </span>
        <p className="convert-subtitle">{text}</p>
        <p className="convert-desc">{convert(createdDte)}</p>
      </div>
    </div>
  );
}
