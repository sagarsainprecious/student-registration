// src/components/Confirmation.js

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Confirmation = () => {
  const registrationDetails = {
    firstName: "John", // Replace with actual data from your state
    lastName: "Doe", // Replace with actual data from your state
    email: "john.doe@example.com", // Replace with actual data
    // Add other relevant fields as needed
  };

  const handleDownload = () => {
    const fileData = `
      Registration Details:
      First Name: ${registrationDetails.firstName}
      Last Name: ${registrationDetails.lastName}
      Email: ${registrationDetails.email}
      // Add other fields as needed
    `;

    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "registration_details.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Registration Complete!
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          Your registration was successful.
        </Typography>

        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            sx={{ flexGrow: 1 }}
          >
            Download Registration Details
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrint}
            sx={{ flexGrow: 1 }}
          >
            Print Registration Details
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.location.replace("/")}
            sx={{ flexGrow: 1 }}
          >
            Back To Home Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Confirmation;
