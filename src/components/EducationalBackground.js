import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setEducationalBackground } from "../reducers"; // Adjust the import based on your file structure

const EducationalBackground = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    qualification: Yup.string().required("Required"),
    institution: Yup.string().required("Required"),
    percentage: Yup.number()
      .required("Required")
      .min(0, "Minimum 0%")
      .max(100, "Maximum 100%"),
    passingYear: Yup.number()
      .required("Required")
      .min(1900, "Year must be 1900 or later")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
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
          Educational Background
        </Typography>

        <Formik
          initialValues={{
            qualification: "",
            institution: "",
            percentage: "",
            passingYear: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(setEducationalBackground(values));
            navigate("/background-info");
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Box mb={2}>
                <Field name="qualification">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Qualification"
                      fullWidth
                      error={
                        touched.qualification && Boolean(errors.qualification)
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="qualification"
                  component="div"
                  style={{ color: "red" }}
                />
              </Box>

              <Box mb={2}>
                <Field name="institution">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Institution"
                      fullWidth
                      error={touched.institution && Boolean(errors.institution)}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="institution"
                  component="div"
                  style={{ color: "red" }}
                />
              </Box>

              <Box mb={2}>
                <Field name="percentage">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Percentage"
                      type="number"
                      fullWidth
                      error={touched.percentage && Boolean(errors.percentage)}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="percentage"
                  component="div"
                  style={{ color: "red" }}
                />
              </Box>

              <Box mb={2}>
                <Field name="passingYear">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Passing Year"
                      type="number"
                      fullWidth
                      error={touched.passingYear && Boolean(errors.passingYear)}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="passingYear"
                  component="div"
                  style={{ color: "red" }}
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

export default EducationalBackground;
