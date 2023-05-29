import { Box, Button, Typography, Link as A } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "450px",
          height: "700px",
          background: "transpare",
          marginTop: "50px",
          borderRadius: "15px",
          border: "1px solid #1db57d",
          padding: "20px",
          boxShadow: "0px 0px 10px #1db57d",
          gap: "0",
        }}
      >
        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "30px",
              border: "1px solid #1db57d",
              borderRadius: "10px",
              gap: "20px",
              padding: "20px 0",
            }}
          >
            <input
              type="text"
              placeholder="Enter your surname"
              style={{
                width: "300px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                height: "60px",
                color: "black",
                border: "1px solid white",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: "300px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                height: "60px",
                color: "white",
                border: "1px solid white",
                padding: "5px",
                borderRadius: "10px",
                margin: "10px",
              }}
            />
            <input
              placeholder="telefon raqamingizni kiriting"
              type="text"
              style={{
                width: "300px",
                height: "60px",
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "3px 10px",
                margin: "10px",
              }}
            />
            <input
              placeholder=" Plastik raqamini kiriting !"
              type="text"
              style={{
                width: "300px",
                height: "60px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#fff",
                padding: "3px 10px",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "40px" }}></Box>
        <Box sx={{ textAlign: "center", marginTop: "40px" }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "20px", background: "transparent" }}
          >
            Agar siz plastik kartichka bilan to`lov qila olmasangiz, siz uchun
            plastik kartichka orqali to`lov qiladigan insonni telefon raqamini
            kiriting !
          </Typography>
          <input
            placeholder="phone number"
            type="text"
            style={{
              width: "300px",
              backgroundColor: "#fff",
              height: "60px",
              border: "none",
              borderRadius: "10px",
              padding: "3px 10px",
            }}
          />
        </Box>
        <Link to={"/payment/payme"} style={{ textDecoration: "none" }}>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              width: "300px",
              marginTop: "40px",
              marginLeft: "55px",
              height: "40px",
            }}
          >
            TASDIQLASH
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Payment;
