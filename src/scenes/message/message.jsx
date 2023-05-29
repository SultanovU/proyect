import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const Message = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "500px",
          height: "600px",
          background: "transparent",
          boxShadow: "0px 0px 8px #1b9e6e",
          opacity: "0.8",
          borderRadius: "20px",
          padding: "100px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontFamily: "sans-serif",
            marginLeft: "45px",
            color: "#1b9e6e",
          }}
        >
          Silka Yuborish
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "80px",
            marginBottom: "10px",
            marginLeft: "60px",
          }}
        >
          Enter your phone number :
        </Typography>
        <input
          required
          type="text"
          style={{
            width: "100%",
            height: "30px",
            border: "none",
            borderRadius: "10px",
            background: "#1b9e6e",
            color: "#fff",
            padding: "0 30px",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "30px",
            background: "#1b9e6e",
            borderRadius: "10px",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            O`quvchi
          </a>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            background: "#1b9e6e",
            borderRadius: "10px",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            Ish hodim
          </a>
        </Box>
        <TelegramIcon
          sx={{
            color: "#1b9e6e",
            width: "100px",
            height: "100px",
            margin: "80px 0 0 82px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Message;
