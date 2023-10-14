import axios from '../axios'

const getToken = () => {
    return localStorage.getItem("token");
};

export const getUserId = () => {
    return localStorage.getItem("userId");
};

export const tokenHeader = () => {
    const token = getToken();
    console.log(token)
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const getUserDetails = () => axios.get('/user/v1/profile', tokenHeader())

export const registerUser = (encryptedPhoneNumber) => axios.post('/auth/v1/register/mobile', { encryptedPhoneNumber })

export const setNewPassword = (password, encryptedPhoneNumber) => axios.patch('/auth/v1/setpassword', { password, encryptedPhoneNumber })

export const checkDisplayName = (displayName) => axios.get(`/user/v1/displayNameStatus?name=${displayName}`, tokenHeader())

export const registerAboutYou = (fullName, displayName, dob, gender) => axios.patch(`/user/v1/register/${getUserId()}/aboutYou`, { fullName, displayName, dob, gender }, tokenHeader())

export const registerNative = (country, state, district, motherToungue) => axios.patch(`/user/v1/register/${getUserId()}/native`, { country, state, district, motherToungue }, tokenHeader())

export const registerPersonalInfo = (maritalStatus, bodyType, physicalStatus, religion, caste, height, weight) => axios.patch(`/user/v1/register/${getUserId()}/personalInfo`, { maritalStatus, bodyType, physicalStatus, religion, caste, height, weight }, tokenHeader())

export const registerAdditionalPersonalInfo = (drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus) => axios.patch(`/user/v1/register/${getUserId()}/additionalPersonalInfo`, { drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus }, tokenHeader())

export const registerAcademic = (passYear, option, academicStream, courseName, country, university, institute, college) => axios.patch(`/user/v1/register/${getUserId()}/academic`, { passYear, option, academicStream, courseName, country, university, institute, college }, tokenHeader())

export const registerOccupation = (annualIncome, option, country, state, district, city) => axios.patch(`/user/v1/register/${getUserId()}/occupation`, { annualIncome, option, country, state, district, city }, tokenHeader())

export const registerOccupationCategory = (jobCategory, jobType, designation, stream, companyName, employerName) => axios.patch(`/user/v1/register/${getUserId()}/occupationCategory`, { jobCategory, jobType, designation, stream, companyName, employerName }, tokenHeader())

export const registerFamily = (fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings) => axios.patch(`/user/v1/register/${getUserId()}/family`, { fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings }, tokenHeader())

export const registerFamilyAddress = (familyName, homeTown, pincode, homeContactNumber, district) => axios.patch(`/user/v1/register/${getUserId()}/familyAddress`, { familyName, homeTown, pincode, homeContactNumber, district }, tokenHeader())

export const updateSignupStatus = () => axios.patch('/user/v1/register/updateSignupStatus', {}, tokenHeader())

export const getAllCountries = () => axios.get('/data/general/countries')

export const getAllStates = (country) => axios.get(`/data/general/state?country=${country}`)

export const getAllDistricts = (state, country) => axios.get(`/data/general/districts?state=${state}&country=${country}`)

export const getAllMotherToungues = (state, country) => axios.get(`/data/general/languages?state=${state}&country=${country}`)

export const getAllReligion = () => axios.get('/data/general/religions')

export const getAllCaste = (religion) => axios.get(`/data/general/caste?religion=${religion}`)

export const getAllAcademicStream = () => axios.get('/data/general/academicStreams')

export const getAllCourse = (stream) => axios.get(`/data/general/course?stream=${stream}`)

export const getAllHomeTown = (district) => axios.get(`/data/general/homeTown?district=${district}`)

export const getAllCities = (state, country) => axios.get(`/data/general/city?state=${state}&country=${country}`)

export const getAllUniversities = (country) => axios.get(`/data/general/universities?country=${country}`)

export const getAllInstitutes = (country) => axios.get(`/data/general/institutes?country=${country}`)

export const getAllColleges = (country) => axios.get(`/data/general/colleges?country=${country}`)

export const getAllDesignations = (category) => axios.get(`/data/general/designations?category=${category}`)

export const getAllJobStreams = (category) => axios.get(`/data/general/jobStreams?category=${category}`)

export const getEmployerDetails = (category) => axios.get(`/data/general/employerDetails?category=${category}`)

export const quickSignupAboutYou = (fullName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus) => axios.patch(`/user/v1/register/${getUserId()}/aboutYouQuick`, { fullName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus }, tokenHeader())

export const quickSignupNative = (country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/user/v1/register/${getUserId()}/addNativeQuick`, { country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department }, tokenHeader())

export const uploadImage = (imgAfterCrop) => axios.post(`/user/v1/register/uploadImage?userId=${getUserId()}`, { imgAfterCrop }, tokenHeader())

export const uploadAadharImage = (imgFrontAfterCrop, imgBackAfterCrop) => axios.post(`/user/v1/register/uploadAadharImage`, { imgFrontAfterCrop, imgBackAfterCrop }, tokenHeader())

export const uploadAadharDetails = (careOf, fullName, aadhar, dob, pincode, houseName) => axios.post(`/user/v1/register/uploadAadhar`, { careOf, fullName, aadhar, dob, pincode, houseName }, tokenHeader())

export const getAllNews = () => axios.get('/data/general/news')

export const getSingleNews = (newsId) => axios.get(`/data/general/newsDetails?newsId=${newsId}`)