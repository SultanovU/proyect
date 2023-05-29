import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import "../chat/chat.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Slidebar = () => {
  const [openModal, setOpenModal] = useState(false);

  let user = {
    name: "Xasanboy",
    lastname: "Abdurasulov",
    phoneNumber: "+998991788473",
  };

  const navigate = useNavigate();
  return (
    <div className="slidebar">
      <div className="wrapper-info">
        <AccountCircleIcon
          sx={{
            width: "90px",
            height: "90px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        />
        <h1>{user.name}</h1>
        <p>{user.phoneNumber}</p>
      </div>
      <hr />
    </div>
  );
};

export default Slidebar;
