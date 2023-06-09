import axios from '../axios'

const getToken = () => {
    return localStorage.getItem("token");
};

export const getUserId = () => {
    return localStorage.getItem("userId");
};

export const tokenHeader = () => {
    const token = getToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const getUserDetails = () => axios.get(`/user/v1/getUserData/${getUserId()}`, tokenHeader())

export const registerUser = (phone) => axios.post('/auth/v1/register/mobile', { phone })

export const registerAboutYou = (firstName, lastName, displayName, dob, gender) => axios.patch(`/user/v1/register/${getUserId()}/aboutYou`, { firstName, lastName, displayName, dob, gender }, tokenHeader())

export const registerNative = (country, state, district, motherToungue) => axios.patch(`/user/v1/register/${getUserId()}/native`, { country, state, district, motherToungue }, tokenHeader())

export const registerPersonalInfo = (maritalStatus, bodyType, physicalStatus, religion, caste, height, weight) => axios.patch(`/user/v1/register/${getUserId()}/personalInfo`, { maritalStatus, bodyType, physicalStatus, religion, caste, height, weight }, tokenHeader())

export const registerAdditionalPersonalInfo = (drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus) => axios.patch(`/user/v1/register/${getUserId()}/additionalPersonalInfo`, { drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus }, tokenHeader())

export const registerAcademic = (passYear, option, academicStream, courseName, country, university, institute, college) => axios.patch(`/user/v1/register/${getUserId()}/academic`, { passYear, option, academicStream, courseName, country, university, institute, college }, tokenHeader())

export const registerOccupation = (annualIncome, option, country, state, district, city, stateID) => axios.patch(`/user/v1/register/${getUserId()}/occupation`, { annualIncome, option, country, state, district, city, stateID }, tokenHeader())

export const registerOccupationCategory = (jobCategory, jobType, designation, stream, companyName, employerName) => axios.patch(`/user/v1/register/${getUserId()}/occupationCategory`, { jobCategory, jobType, designation, stream, companyName, employerName }, tokenHeader())

export const registerFamily = (fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings) => axios.patch(`/user/v1/register/${getUserId()}/family`, { fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings }, tokenHeader())

export const registerFamilyAddress = (familyName, homeTown, pincode, contactNumber, homeContactNumber, district) => axios.patch(`/user/v1/register/${getUserId()}/familyAddress`, { familyName, homeTown, pincode, contactNumber, homeContactNumber, district }, tokenHeader())

export const getAllCountries = () => axios.get('/data/general/getAllCountries')

export const getAllStates = (country) => axios.get(`/data/general/state?country=${country}`)

export const getAllDistricts = (state) => axios.get(`/data/general/district?state=${state}`)

export const getAllMotherToungues = (state) => axios.get(`/data/general/motherToungue?state=${state}`)

export const getAllReligion = () => axios.get('/data/general/getAllReligion')

export const getAllCaste = (religion) => axios.get(`/data/general/caste?religion=${religion}`)

export const getAllAcademicStream = () => axios.get('/data/general/getAllAcademicStream')

export const getAllCourse = (stream) => axios.get(`/data/general/course?stream=${stream}`)

export const getAllPincode = () => axios.get('/data/general/getAllPincode')

export const getAllHomeTown = () => axios.get('/data/general/getAllHomeTown')

export const getAllCities = (state) => axios.get(`/data/general/city?state=${state}`)

export const getAllUniversities = (country) => axios.get(`/data/general/getAllUniversities?country=${country}`)

export const getAllInstitutes = (country) => axios.get(`/data/general/getAllInstitutes?country=${country}`)

export const getAllColleges = (country) => axios.get(`/data/general/getAllColleges?country=${country}`)

export const getAllDesignations = (category) => axios.get(`/data/general/getAllDesignations?category=${category}`)

export const getAllJobStreams = (category) => axios.get(`/data/general/getAllJobStreams?category=${category}`)

export const getEmployerDetails = (category) => axios.get(`/data/general/getEmployerDetails?category=${category}`)

export const quickSignupAboutYou = (firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus) => axios.patch(`/user/v1/register/${getUserId()}/aboutYouQuick`, { firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus }, tokenHeader())

export const quickSignupNative = (country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/user/v1/register/${getUserId()}/addNativeQuick`, { country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department }, tokenHeader())

export const uploadImage = (imgAfterCrop) => axios.post(`/user/v1/register/uploadImage?userId=${getUserId()}`, { imgAfterCrop }, tokenHeader())

export const uploadAadharImage = (imgFrontAfterCrop, imgBackAfterCrop) => axios.post(`/user/v1/register/uploadAadharImage`, { imgFrontAfterCrop, imgBackAfterCrop }, tokenHeader())

export const uploadAadharDetails = (careOf, fullName, aadhar, dob, pincode, houseName) => axios.post(`/user/v1/register/uploadAadhar`, { careOf, fullName, aadhar, dob, pincode, houseName }, tokenHeader())