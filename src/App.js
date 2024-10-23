import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import AcademicInterests from "./components/AcademicInterests";
import EducationalBackground from "./components/EducationalBackground";
import BackgroundInfo from "./components/BackgroundInfo";
import DocumentUpload from "./components/DocumentUpload";
import FinalReview from "./components/FinalReview";
import Confirmation from "./components/Confirmation";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/address-info" element={<AddressInfo />} />
          <Route path="/academic-interests" element={<AcademicInterests />} />
          <Route
            path="/educational-background"
            element={<EducationalBackground />}
          />
          <Route path="/background-info" element={<BackgroundInfo />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/final-review" element={<FinalReview />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
