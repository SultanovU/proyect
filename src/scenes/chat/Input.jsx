import React, { useEffect, useState } from "react";
import Emoji from "./Emojji";
import './chat.css'
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


export default function Input() {
  const [select, setSelect] = useState(false);
  const [letter, setLetter] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (file) {
      alert("Sizning fileingiz saylandi davom ettiravering....");
    }
  }, [file]);
  return (
      <div className="wrapper-input">
        <span
          onClick={() => setSelect(true)}
          style={{ display: select ? "none" : "flex" }}
        >
         <SentimentSatisfiedAltIcon/>
        </span>
        <span
          className="emoji"
          style={{ display: select ? "block" : "none" }}
        >
          <i
            onClick={() => setSelect(false)}
          />
          <Emoji />
        </span>
        <input
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        className="input-message"
        placeholder="Type something...."
      />
      
      <div >
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : "")}
        />
        <button style={{border:'none',background:'transparent'}}>
         <SendIcon sx={{color:'white'}}/>
        </button>
      </div>
    </div>
  );
}
