import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Avatar from "../../assets/pngwing.com.png";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ThirdToogle = () => {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
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
        <Box sx={{ marginTop: "30px" }}>
          <img
            src={Avatar}
            width="200px"
            style={{ marginLeft: "35px", marginBottom: "50px" }}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Name : </Typography>
            <input
              type="text"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #1db57d",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Last name : </Typography>
            <input
              type="text"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #1db57d",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "33px",
              marginBottom: "30px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Telefon : </Typography>
            <input
              type="text"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #1db57d",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <Typography sx={{ fontSize: "12px" }}>Password : </Typography>
            <input
              type="text"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #1db57d",
              }}
            />
          </Box>

          <FormControlLabel
            sx={{ marginTop: "30px", marginLeft: "120px" }}
            control={<Android12Switch defaultChecked />}
          />
          <Typography sx={{ position: "absolute", top: "462px" }}>
            Bildirishnomalar :
          </Typography>

          <Button
            color="secondary"
            sx={{ width: "100%", marginTop: "35px" }}
            variant="contained"
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ThirdToogle;
