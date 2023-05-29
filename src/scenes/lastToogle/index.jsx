import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondToogle from "../secondToggle/secondToggle";

const LastToogle = () => {
    const [ showSecondToogle , setShowSecondToogle] = useState(false)
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: "999",
          top: "64px",
          right: "0",
          width: "350px",
          height: "100vh",
          background: "transparent",
          color: "white",
          backdropFilter: "blur(30px)",
          display: "flex",
          justifyContent: "center",
          padding: "50px 20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">To`lov qiling !</Typography>
          <div
            style={{
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <p
              style={{
                border: "1px solid #4CCEAC",
                width: "250px",
                height: "30px",
                background: "transparent",
                color: "#4CCEAC",
                padding: "5px",
                userSelect: "none",
                marginTop: "25px",
              }}
              className="span"
            >
              500 000 so`m
            </p>
            <input
              type="text"
              placeholder="Karta raqamini kiriting !"
              style={{
                width: "250px",
                height: "30px",
                padding: "5px",
                background: "transparent",
                color: "white",
                border: "1px solid #4CCEAC",
                outline: "none",
                marginTop: "20px",
              }}
            />
          </div>

          <Button
            variant="contained"
            sx={{ width: "250px", marginTop: "50px", background: "#4CCEAC" }}
            onClick={() => setShowSecondToogle(!showSecondToogle)}
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
      {showSecondToogle && <SecondToogle/>}
    </>
  );
};

export default LastToogle;
