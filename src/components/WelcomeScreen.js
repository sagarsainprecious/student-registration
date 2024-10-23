import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import logo from "../logo.png";

const WelcomeScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "90vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: 2,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: "100%", marginBottom: "20px" }}
      />
      <Typography
        variant="h3"
        className="fade-in"
        sx={{ marginBottom: "10px" }}
      >
        Welcome to the Student Registration
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Follow the steps to complete your registration.
      </Typography>
      <Link to="/personal-info" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Start Registration
        </Button>
      </Link>
    </Box>
  );
};

export default WelcomeScreen;
