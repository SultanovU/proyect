import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Editcard = () => {
  const navigate = useNavigate();
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
            background: "black",
            marginTop: "50px",
            borderRadius: "15px",
            border: "1px solid white",
            padding: "20px",
            boxShadow: "0px 0px 10px #1db57d",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "220px",
              margin: "auto",
              marginTop: "150px",
              position: "relative",
            }}
          >
            <img
              src="https://phonoteka.org/uploads/posts/2021-07/1625501267_7-phonoteka-org-p-karta-rossii-na-rabochii-stol-krasivo-oboi-8.jpg"
              width="100%"
              height={220}
              alt=""
            />
            <input
              placeholder="karta nomi"
              style={{
                position: "absolute",
                top: "20px",
                left: "10px",
                width: "70px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px",
                border: "none",
              }}
            />
            <input
              placeholder="karta raqami"
              style={{
                position: "absolute",
                height: "25px",
                top: "180px",
                left: "10px",
                width: "150px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px",
                border: "none",
              }}
            />
            <input
              placeholder="muddati"
              style={{
                position: "absolute",
                height: "25px",
                top: "180px",
                left: "310px",
                width: "80px",
                outline: "none",
                borderRadius: "10px",
                padding: "5px ",
                border: "none",
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              marginTop: "130px",
              background: "#1db57d",
              marginLeft: "130px",
            }}
          >
            Tasdiqlash
          </Button>
        </Box>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: "absolute",
          zIndex: "98989898",
          top: "140px",
          left: "680px",
          color: "white",
          border: "1px solid white",
        }}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default Editcard;
