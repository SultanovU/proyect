import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BoltIcon from "@mui/icons-material/Bolt";

const Scaner = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "450px",
            height: "669px",
            background: "#1db57d",
            marginTop: "50px",
            borderRadius: "15px",
            border: "1px solid white",
            padding: "20px",
            boxShadow: "0px 0px 10px #1db57d",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "230px",
              background: "white",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "absolute",
          zIndex: "98989898",
          top: "140px",
          left: "630px",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
      <IconButton
        onClick={handleClick}
        style={{ backgroundColor: active ? "black" : "white" }}
        sx={{
          position: "absolute",
          top: "135px",
          left: "970px",
          zIndex: "999899",
        }}
      >
        <BoltIcon sx={{ width: "30px", height: "30px", color: "red" }} />
      </IconButton>
    </>
  );
};

export default Scaner;
