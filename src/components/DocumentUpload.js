import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDocuments } from "../reducers"; // Adjust as necessary

const DocumentUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    documents: Yup.array().min(1, "At least one document is required"),
  });

  const handleFileUpload = (event, setFieldValue) => {
    const files = event.currentTarget.files;
    setFieldValue("documents", Array.from(files));
    dispatch(setDocuments(Array.from(files))); // Dispatch documents to Redux
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
          Document Upload
        </Typography>

        <Formik
          initialValues={{ documents: [] }}
          validationSchema={validationSchema}
          onSubmit={() => navigate("/final-review")}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <Box mb={2}>
                <input
                  type="file"
                  multiple
                  onChange={(event) => handleFileUpload(event, setFieldValue)}
                />
                {errors.documents && touched.documents ? (
                  <Typography variant="body2" color="error">
                    {errors.documents}
                  </Typography>
                ) : null}
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

export default DocumentUpload;
