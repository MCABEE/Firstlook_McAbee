import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import MembershipPage from './components/Authentication/Signup/MembershipPage';
import PhoneReg from './components/Authentication/Signup/PhoneReg';
import RegistrationMain from './components/Authentication/Signup/RegistrationMain';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import MembershipPolicy from './components/MembershipPolicy/MembershipPolicy';
import RefundPolicy from './components/RefundPolicy/RefundPolicy';
import { registrationContext } from './context/formContext';
import { useState } from 'react';
import QuickSignup from './components/Authentication/QuickSignup/QuickSignup';
import SignupOption from './components/Authentication/QuickSignup/SignupOption';
import LandingPage from './components/LandingPage/LandingPage';
import SignupRedirect from './components/Authentication/SignupRedirect';
import FeaturePage from './components/FeaturePage/FeaturePage';
import PageConstruct from './components/PageUnderConstruction/PageConstruct';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AppInstallPage from './components/AppInstallPage/AppInstallPage';
import NewsPage from './components/News/NewsPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import PricingPage from './components/Pricing/PricingPage';

function App() {
  const [page, setPage] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Signup' element={<SignupRedirect />} />
        <Route path='/register' element={<MembershipPage />} />
        <Route path='/register/verify' element={<PhoneReg />} />
        <Route path='/register/signupOption' element={<SignupOption />} />
        <Route path='/register/signup' element={
          <registrationContext.Provider value={{ page, setPage }}>
            <RegistrationMain />
          </registrationContext.Provider>} />
        <Route path='/register/quickSignup' element={
          <registrationContext.Provider value={{ page, setPage }}>
            <QuickSignup />
          </registrationContext.Provider>} />
        <Route path='/privacypolicy' element={<TermsOfUse />} />
        <Route path='/membershippolicy' element={<MembershipPolicy />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/firstlookFeatures' element={<FeaturePage />} />
        <Route path='/stories' element={<PageConstruct />} />
        <Route path='/faq' element={<PageConstruct />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/mediaCentre' element={<PageConstruct />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/installapp' element={<AppInstallPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
