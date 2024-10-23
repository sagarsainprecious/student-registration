import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FinalReview = () => {
  const {
    personalInfo,
    addressInfo,
    academicInterests,
    educationalBackground,
    backgroundInfo,
    documents,
  } = useSelector((state) => state.form);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle final submission logic (e.g., sending data to the backend)
    // Redirect to confirmation page

    navigate("/confirmation");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Final Review
        </Typography>

        <Typography variant="h6">Personal Information</Typography>
        <Typography>First Name: {personalInfo.firstName}</Typography>
        <Typography>Last Name: {personalInfo.lastName}</Typography>
        <Typography>Email: {personalInfo.email}</Typography>

        <Typography variant="h6">Address Information</Typography>
        <Typography>Street: {addressInfo.street}</Typography>
        <Typography>City: {addressInfo.city}</Typography>
        <Typography>State: {addressInfo.state}</Typography>
        <Typography>ZIP: {addressInfo.zip}</Typography>

        <Typography variant="h6">Academic Interests</Typography>
        <Typography>
          Interested Country: {academicInterests.interestedCountry}
        </Typography>
        <Typography>
          English Proficiency Test: {academicInterests.englishProficiencyTest}
        </Typography>

        <Typography variant="h6">Educational Background</Typography>
        <Typography>
          Qualification: {educationalBackground.qualification}
        </Typography>
        <Typography>
          Institution: {educationalBackground.institution}
        </Typography>
        <Typography>Percentage: {educationalBackground.percentage}</Typography>
        <Typography>
          Passing Year: {educationalBackground.passingYear}
        </Typography>

        <Typography variant="h6">Background Information</Typography>
        <Typography>Visa Rejection: {backgroundInfo.visaRejection}</Typography>
        <Typography>
          Gap in Education: {backgroundInfo.gapInEducation}
        </Typography>

        <Typography variant="h6">
          Documents Uploaded: {documents.length}
        </Typography>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FinalReview;
