import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import "../score/index.css";

const Student = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: "40px", fontFamily: "sans-serif" }}>
          Low score Students{" "}
        </Typography>
        <Typography sx={{ color: colors.greenAccent[500], fontSize: "18px" }}>
          Sening o`quvchilaringning ballari pas.
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "759px", marginTop:"5px",padding:"7px" }}>
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
          <table id="customers">
            <tr>
              <th>I.F.SH</th>
              <th>Ustozining ismi</th>
              <th>Kurs Nomi</th>
              <th>Bali</th>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
            <tr>
              <td>Xursand</td>
              <td>Polankas</td>
              <td>Frontend</td>
              <td>60-ball</td>
            </tr>
          </table>
        </div>
      </Box>
      <Box sx={{ position: "absolute", top: "80px", left: "660px" }}>
        <label for="date" style={{ marginLeft: "300px", top: "0" }}>
          Choose day / month / year :
        </label>
        <select
          id="day"
          type="text"
          label
          style={{
            marginLeft: "10px",
            width: "80px",
            background: "#1db57d",
            color: "#fff",
          }}
        >
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
        <select
          id="month"
          type="text"
          label
          style={{
            marginLeft: "10px",
            width: "80px",
            background: "#1db57d",
            color: "#fff",
          }}
        >
          <option value="1">Sentyabr</option>
          <option value="2">Oktyabr</option>
          <option value="3">Noyabr</option>
          <option value="4">Dekabr</option>
          <option value="5">Yanvar</option>
          <option value="6">Fevral</option>
          <option value="7">Mart</option>
          <option value="7">Aprel</option>
          <option value="7">May</option>
          <option value="7">Iyun</option>
          <option value="7">Iyul</option>
          <option value="7">Avgust</option>
        </select>
        <select
          id="year"
          type="text"
          style={{
            marginLeft: "10px",
            width: "60px",
            background: "#1db57d",
            color: "#fff",
          }}
        >
          <option value="2000">2015</option>
          <option value="2000">2016</option>
          <option value="2000">2017</option>
          <option value="2000">2018</option>
          <option value="2000">2019</option>
          <option value="2000">2020</option>
          <option value="2000">2021</option>
          <option value="2000">2022</option>
          <option value="2000">2023</option>
        </select>
      </Box>
    </>
  );
};

export default Student;
