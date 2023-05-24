import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Authentication/Login/Login';
import MembershipPage from './components/Authentication/Signup/MembershipPage';
import PhoneReg from './components/Authentication/Signup/PhoneReg';
import RegistrationMain from './components/Authentication/Signup/RegistrationMain';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import MembershipPolicy from './components/MembershipPolicy/MembershipPolicy';
import RefundPolicy from './components/RefundPolicy/RefundPolicy';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<MembershipPage/>}/>
        <Route path='/register/verify' element={<PhoneReg/>}/>
        <Route path='/register/signup' element={<RegistrationMain/>}/>
        <Route path='/termsofuse' element={<TermsOfUse/>}/>
        <Route path='/membership/policy' element={<MembershipPolicy/>}/>
        <Route path='/refund/policy' element={<RefundPolicy/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
