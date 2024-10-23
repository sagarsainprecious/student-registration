import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setBackgroundInfo } from "../reducers"; // Adjust the import based on your file structure

const BackgroundInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    visaRejection: Yup.string().required("Required"),
    gapInEducation: Yup.string().required("Required"),
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
          Background Information
        </Typography>

        <Formik
          initialValues={{ visaRejection: "", gapInEducation: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(setBackgroundInfo(values));
            navigate("/document-upload");
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="visaRejection"
                  label="Visa Rejection"
                  fullWidth
                  error={touched.visaRejection && Boolean(errors.visaRejection)}
                  helperText={<ErrorMessage name="visaRejection" />}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="gapInEducation"
                  label="Gap in Education"
                  fullWidth
                  error={
                    touched.gapInEducation && Boolean(errors.gapInEducation)
                  }
                  helperText={<ErrorMessage name="gapInEducation" />}
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

export default BackgroundInfo;
