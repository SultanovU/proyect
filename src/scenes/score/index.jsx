import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import "./index.css";

const Score = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: "40px", fontFamily: "sans-serif" }}>
          Ball Kiritish{" "}
        </Typography>
        <Typography sx={{ color: colors.greenAccent[500], fontSize: "18px" }}>
          Yosh avlod kelajakdir ularning ballari ham kelajak ☻
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "557px", padding: "20px" }}>
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
          <table id="customers">
            <tr>
              <th>Kurs Nomi</th>
              <th>Yuqori ball kiritish</th>
              <th>O`rtacha ball kiritish</th>
              <th>Pas ball kiritish</th>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
              <td>
                <input className="input" type="text" />
              </td>
            </tr>
          </table>
          <Button
            variant="contained"
            sx={{
              background: "#04AA6D",
              marginLeft: "1000px",
              marginTop: "60px",
            }}
          >
            Tasdiqlash
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Score;
