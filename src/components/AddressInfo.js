import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAddressInfo } from "../reducers"; // Update as necessary

const AddressInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
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
          Address Information
        </Typography>

        <Formik
          initialValues={{ street: "", city: "", state: "", zip: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(setAddressInfo(values));
            navigate("/academic-interests");
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="street"
                  label="Street"
                  fullWidth
                  error={touched.street && Boolean(errors.street)}
                  helperText={<ErrorMessage name="street" />}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth
                  error={touched.city && Boolean(errors.city)}
                  helperText={<ErrorMessage name="city" />}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  fullWidth
                  error={touched.state && Boolean(errors.state)}
                  helperText={<ErrorMessage name="state" />}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="zip"
                  label="ZIP"
                  fullWidth
                  error={touched.zip && Boolean(errors.zip)}
                  helperText={<ErrorMessage name="zip" />}
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

export default AddressInfo;
