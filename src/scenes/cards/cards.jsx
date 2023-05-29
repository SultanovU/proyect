import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Popper from "@mui/material/Popper";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./cards.css";
const Cards = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card"
          sx={{
            width: "450px",
            height: "669px",
            background: "transparent",
            marginTop: "50px",
            borderRadius: "15px",
            border: "1px solid white",
            padding: "20px",
            boxShadow: "0px 0px 10px #1db57d",
            overflow: "auto",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#1db57d",
              width: "150px",
              height: "40px",
              marginTop: "50px",
              marginLeft: "130px",
            }}
          >
            <Link
              to={"/payme/editcard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Karta qo`shish
            </Link>
          </Button>

          <Box
            sx={{
              width: "80%",
              height: "160px",
              margin: "auto",
              marginTop: "50px",
              position: "relative",
            }}
          >
            <button
              className="btn"
              aria-describedby={id}
              type="button"
              onClick={handleClick}
            ></button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: "1px solid #1db57d",
                  p: 1,
                  bgcolor: "background.paper",
                  marginTop: "5px",
                }}
              >
                Asosiy Karta
              </Box>
            </Popper>
            <img
              src="https://phonoteka.org/uploads/posts/2021-07/1625501267_7-phonoteka-org-p-karta-rossii-na-rabochii-stol-krasivo-oboi-8.jpg"
              width={319}
              height={160}
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "80px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "20px",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "140px",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>
          <Box
            sx={{
              width: "80%",
              height: "160px",
              margin: "auto",
              marginTop: "50px",
              position: "relative",
            }}
          >
            <button
              className="btn"
              aria-describedby={id}
              type="button"
              onClick={handleClick}
            ></button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: "1px solid #1db57d",
                  p: 1,
                  bgcolor: "background.paper",
                  marginTop: "5px",
                }}
              >
                Asosiy Karta
              </Box>
            </Popper>
            <img
              src="https://phonoteka.org/uploads/posts/2021-07/1625501267_7-phonoteka-org-p-karta-rossii-na-rabochii-stol-krasivo-oboi-8.jpg"
              width={319}
              height={160}
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "80px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "20px",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "140px",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>
          <Box
            sx={{
              width: "80%",
              height: "160px",
              margin: "auto",
              marginTop: "50px",
              position: "relative",
            }}
          >
            <button
              className="btn"
              aria-describedby={id}
              type="button"
              onClick={handleClick}
            ></button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: "1px solid #1db57d",
                  p: 1,
                  bgcolor: "background.paper",
                  marginTop: "5px",
                }}
              >
                Asosiy Karta
              </Box>
            </Popper>
            <img
              src="https://phonoteka.org/uploads/posts/2021-07/1625501267_7-phonoteka-org-p-karta-rossii-na-rabochii-stol-krasivo-oboi-8.jpg"
              width={319}
              height={160}
              alt=""
            />
            <p style={{ position: "absolute", top: "0", left: "20px" }}>Humo</p>
            <p
              style={{
                position: "absolute",
                top: "80px",
                left: "20px",
                fontSize: "20px",
              }}
            >
              500.000 so`m
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "20px",
                fontSize: "12px",
              }}
            >
              9860********3232
            </p>
            <p
              style={{
                position: "absolute",
                top: "125px",
                left: "140px",
                fontSize: "12px",
              }}
            >
              05/28
            </p>
          </Box>
        </div>
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

export default Cards;
