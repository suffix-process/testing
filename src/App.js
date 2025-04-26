// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import PrivacyPolicyPage from './pages/PrivacyPolicy';  // your standalone page
import TermsOfUse from './pages/TermsOfUse';
import Picture from './pages/Picture'; // your standalone page
// import TermsPage from './pages/Terms';                  // if you have one
// import CompliancePage from './pages/Compliance';        // etc.


function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* full one-page Home */}
          <Route path="/" element={<Home />} />

          {/* dedicated legal pages */}
          <Route path="/privacy"   element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/picture" element={<Picture />} />
          {/* <Route path="/terms"     element={<TermsPage />} /> */}
          {/* <Route path="/compliance" element={<CompliancePage />} /> */}
          {/* ...other routes */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
