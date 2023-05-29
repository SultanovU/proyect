import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SendToogle = () => {
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
        }}
      >
        <Box sx={{ marginTop: "80px", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontFamily: "sans-serif",
              marginLeft: "10px",
              marginBottom: "30px",
            }}
          >
            Xodimga silka yuborish
          </Typography>
          <Box>
            <Typography>Gmail and Tel</Typography>
            <input
              type="text"
              style={{
                height: "30px",
                border: "1px solid white",
                borderRadius: "6px",
                background: "transparent",
                color: "white",
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ marginTop: "20px" }}>Tanlash</Typography>
            <select
              name="choose"
              id="choose"
              style={{
                width: "100px",
                height: "30px",
                border: "1px solid white",
                borderRadius: "6px",
                background: "transparent",
                color: "white",
              }}
            >
              <option value=" " style={{ background: "black" }}>
                {" "}
              </option>
              <option value="charts" style={{ background: "black" }}>
                Barchasi
              </option>
              <option value="charts" style={{ background: "black" }}>
                Admins
              </option>
              <option value="dashboard" style={{ background: "black" }}>
                Dashboard
              </option>
              <option value="data" style={{ background: "black" }}>
                Data
              </option>
              <option value="pages" style={{ background: "black" }}>
                Pages
              </option>
              <option value="charts" style={{ background: "black" }}>
                Charts
              </option>
            </select>
          </Box>
          <Typography sx={{ margin: "30px 0" }}>To`lash</Typography>
          <Box>
            <Button
              color="secondary"
              sx={{
                width: "100px",
                marginBottom: "20px",
                border: "1px solid white",
              }}
            >
              300.000 so`m
            </Button>
            <Box>
              <input
                type="text"
                placeholder="Bank kartangizni kiriting !"
                style={{
                  height: "30px",
                  border: "1px solid white",
                  borderRadius: "6px",
                  background: "transparent",
                  color: "white",
                  padding:'5px',
                  marginTop:"30px"
                }}
              />
            </Box>
          </Box>
          <br />
          <hr />
          <Button
            color="secondary"
            sx={{ width: "100%", marginTop: "25px" }}
            variant="contained"
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SendToogle;
