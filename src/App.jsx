import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import MembershipPage from './components/Authentication/Signup/MembershipPage';
import PhoneReg from './components/Authentication/Signup/PhoneReg';
// import RegistrationMain from './components/Authentication/Signup/RegistrationMain';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import MembershipPolicy from './components/MembershipPolicy/MembershipPolicy';
import RefundPolicy from './components/RefundPolicy/RefundPolicy';
import { registrationContext } from './context/formContext';
import { useState } from 'react';
// import QuickSignup from './components/Authentication/QuickSignup/QuickSignup';
// import SignupOption from './components/Authentication/QuickSignup/SignupOption';
import LandingPage from './components/LandingPage/LandingPage';
import SignupRedirect from './components/Authentication/SignupRedirect';
import FeaturePage from './components/FeaturePage/FeaturePage';
import PageConstruct from './components/PageUnderConstruction/PageConstruct';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AppInstallPage from './components/AppInstallPage/AppInstallPage';
import NewsPage from './components/News/NewsPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import PricingPage from './components/Pricing/PricingPage';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';
import ProtectedRoute from './ProtectedRoute';
import HomeRoute from './HomeRoute';
import AllNewsPage from './components/News/AllNewsPage';
import HelpCenterPage from './components/HelpCenter/HelpCenterPage';
import SetPassword from './components/Authentication/Signup/SetPassword';
import NewRegistration from './components/Authentication/NewRegistration/NewRegistration';

function App() {
  const [page, setPage] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Signup' element={<ProtectedRoute><SignupRedirect /></ProtectedRoute>} />
        <Route path='/register' element={<ProtectedRoute><MembershipPage /></ProtectedRoute>} />
        <Route path='/register/verify' element={<ProtectedRoute><PhoneReg /></ProtectedRoute>} />
        <Route path='/register/setPassword' element={<HomeRoute><SetPassword /></HomeRoute>} />
        <Route path='/register/signup' element={
          <registrationContext.Provider value={{ page, setPage }}>
            <HomeRoute>
              <NewRegistration />
            </HomeRoute>
          </registrationContext.Provider>} />

        {/* <Route path='/register/signupOption' element={<HomeRoute><SignupOption /></HomeRoute>} /> */}
        {/* <Route path='/register/signup' element={
          <registrationContext.Provider value={{ page, setPage }}>
            <HomeRoute>
              <RegistrationMain />
            </HomeRoute>
          </registrationContext.Provider>} /> */}
        {/* <Route path='/register/quickSignup' element={
          <registrationContext.Provider value={{ page, setPage }}>
            <HomeRoute>
              <QuickSignup />
            </HomeRoute>
          </registrationContext.Provider>} /> */}

        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
        <Route path='/membershippolicy' element={<MembershipPolicy />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/firstlookFeatures' element={<FeaturePage />} />
        <Route path='/stories' element={<PageConstruct />} />
        <Route path='/helpcenter' element={<HelpCenterPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/mediaCentre' element={<PageConstruct />} />
        <Route path='/pageunderconstruction' element={<PageConstruct />} />
        <Route path='/news/:newsId' element={<NewsPage />} />
        <Route path='/allnews' element={<AllNewsPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/installapp' element={<AppInstallPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
