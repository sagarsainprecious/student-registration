import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAcademicInterests } from "../reducers"; // Adjust the import based on your file structure

const AcademicInterests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    interestedCountry: Yup.string().required("Required"),
    englishProficiencyTest: Yup.string().required("Required"),
  });

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
          Academic Interests
        </Typography>

        <Formik
          initialValues={{ interestedCountry: "", englishProficiencyTest: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(setAcademicInterests(values));
            navigate("/educational-background");
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="interestedCountry"
                  label="Interested Country"
                  fullWidth
                  error={
                    touched.interestedCountry &&
                    Boolean(errors.interestedCountry)
                  }
                  helperText={<ErrorMessage name="interestedCountry" />}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="englishProficiencyTest"
                  label="English Proficiency Test"
                  fullWidth
                  error={
                    touched.englishProficiencyTest &&
                    Boolean(errors.englishProficiencyTest)
                  }
                  helperText={<ErrorMessage name="englishProficiencyTest" />}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default AcademicInterests;
