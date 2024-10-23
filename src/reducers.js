import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  addressInfo: {},
  academicInterests: {},
  educationalBackground: {},
  backgroundInfo: {},
  documents: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setAddressInfo: (state, action) => {
      state.addressInfo = action.payload;
    },
    setAcademicInterests: (state, action) => {
      state.academicInterests = action.payload;
    },
    setEducationalBackground: (state, action) => {
      state.educationalBackground = action.payload;
    },
    setBackgroundInfo: (state, action) => {
      state.backgroundInfo = action.payload;
    },
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setAddressInfo,
  setAcademicInterests,
  setEducationalBackground,
  setBackgroundInfo,
  setDocuments,
} = formSlice.actions;

export default formSlice.reducer;
