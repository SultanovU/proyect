import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Scaner from "../../assets/scaner.png";
import Qrkod from "../../assets/qr kod.png";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const Payme = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "450px",
            height: "709px",
            marginTop: "50px",
            borderRadius: "15px",
            border: "1px solid gray",
          }}
        >
          <Box
            sx={{
              width: "448px",
              borderRadius: "15px",
              height: "330px",
              background: "#4CCEAC",
              position: "absolute",
              top: "120px",
              zIndex: "9999",
            }}
          ></Box>
          <Box
            sx={{
              width: "444px",
              borderRadius: "15px",
              height: "390px",
              background: "black",
              position: "absolute",
              top: "438px",
              left: "610px",
            }}
          ></Box>
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              zIndex: "9999",
              top: "250px",
              left: "630px",
            }}
          >
            Umumiy balans
          </Typography>
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              zIndex: "9999",
              top: "295px",
              left: "630px",
            }}
          >
            100.000.000 so`m
          </Typography>
          <Link
            to={"/payme/cards"}
            style={{
              position: "absolute",
              zIndex: "9999999",
              color: "white",
              top: "360px",
              left: "900px",
              textDecoration: "none",
              display: "flex",
              gap: "3px",
              alignItems: "center",
            }}
          >
            <PlayCircleFilledIcon />
            <p>Kartalarga o`tish</p>
          </Link>
          <Box
            sx={{
              position: "absolute",
              zIndex: "99999",
              width: "100px",
              height: "100px",
              background: "#413C3C",
              borderRadius: "10px",
              top: "420px",
              left: "630px",
              gap: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={Scaner}
              style={{ marginTop: "12px", marginLeft: "23px" }}
              width={50}
              height={50}
              alt=""
            />
            <Link
              to={"/payme/scaner"}
              style={{
                textDecoration: "none",
                color: "#4CCEAC",
                fontSize: "15px",
                marginTop: "5px",
                marginLeft: "8px",
              }}
            >
              UzMit scaner
            </Link>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: "99999",
              width: "100px",
              height: "100px",
              background: "#413C3C",
              padding: "10px",
              borderRadius: "10px",
              top: "420px",
              left: "780px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <LibraryBooksIcon
              sx={{
                marginTop: "5px",
                marginLeft: "12px",
                width: "50px",
                height: "50px",
              }}
            />

            <Link
              to={"/payme/viewSave"}
              style={{
                textDecoration: "none",
                color: "#4CCEAC",
                fontSize: "11px",
                marginTop: "3px",
                marginLeft: "0px",
              }}
            >
              Save and View
            </Link>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: "99999",
              width: "100px",
              height: "100px",
              background: "#413C3C",
              padding: "10px",
              borderRadius: "10px",
              top: "420px",
              left: "930px",
              gap: "3px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={Qrkod}
              style={{ marginTop: "5px", marginLeft: "14px" }}
              width={50}
              height={50}
              alt=""
            />
            <Link
              to={"/payme/qrcode"}
              style={{
                textDecoration: "none",
                color: "#4CCEAC",
                fontSize: "15px",
                marginTop: "5px",
                marginLeft: "16px",
              }}
            >
              Qr code
            </Link>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: "99",
              top: "530px",
              left: "618px",
              width: "430px",
              height: "290px",
              padding: " 0px 0px",
              background: "transparent",
              overflow: "auto",
            }}
          >
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid gray",
                background: "#413C3C",
                borderRadius: "5px",
                height: "130px",
                padding: "0",
              }}
            >
              <div>
                <AddCardIcon
                  sx={{ width: "60px", height: "140px", cursor: "pointer" }}
                />
              </div>
              <div
                style={{
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
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
                    marginTop: "25px",
                  }}
                />
                <p
                  style={{
                    border: "1px solid #4CCEAC",
                    width: "250px",
                    height: "30px",
                    background: "#413C3C",
                    color: "#4CCEAC",
                    padding: "5px",
                    userSelect: "none",
                    marginTop: "25px",
                  }}
                  className="span"
                >
                  Jumaniyozuv Alibek
                </p>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid gray",
                background: "#413C3C",
                borderRadius: "5px",
                height: "130px",
                padding: "0",
                marginTop:"20px"
              }}
            >
              <div>
                <AddCardIcon
                  sx={{ width: "60px", height: "140px", cursor: "pointer" }}
                />
              </div>
              <div
                style={{
                  display:'flex',
                  gap:'20px',
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Summani kiriting !"
                  style={{
                    width: "250px",
                    height: "30px",
                    padding: "5px",
                    background: "transparent",
                    color: "white",
                    border: "1px solid #4CCEAC",
                    outline: "none",
                    marginTop: "25px",
                  }}
                />
              <Button variant="contained" sx={{background:'#4CCEAC'}}>To`lash</Button>
              </div>
            </Box>
            <hr style={{ margin: "30px" }} />
            <Box
              sx={{
                padding: "20px",
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid #4CCEAC",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowDownwardIcon
                  sx={{ color: "#4CCEAC", width: "40px", height: "40px" }}
                />
              </Box>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowUpwardIcon
                  sx={{ color: "red", width: "40px", height: "40px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ color: "#4CCEAC", borderRight: "1px solid gary" }}>
                + 200.000
              </Box>
              <Box sx={{ color: "red" }}>- 200.000</Box>
            </Box>
          </Box>
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
        go back
      </Button>
    </>
  );
};

export default Payme;
