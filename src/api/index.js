import axios from '../axios'

const userId = localStorage.getItem("userId")
const token = localStorage.getItem("token")

const tokenHeader = { headers: { Authorization: `Bearer ${token}` } }

export const getUserDetails = () => axios.get(`/user/v1/getUserData?userId=${userId}`, tokenHeader)

export const registerUser = (phone) => axios.post('/auth/v1/register/mobile', { phone })

export const registerAboutYou = (firstName, lastName, displayName, dob, gender) => axios.patch(`/user/v1/register/${userId}/aboutYou`, { firstName, lastName, displayName, dob, gender }, tokenHeader)

export const registerNative = (country, state, district, motherToungue) => axios.patch(`/user/v1/register/${userId}/native`, { country, state, district, motherToungue }, tokenHeader)

export const registerPersonalInfo = (maritalStatus, bodyType, physicalStatus, religion, caste, height, weight) => axios.patch(`/user/v1/register/${userId}/personalInfo`, { maritalStatus, bodyType, physicalStatus, religion, caste, height, weight }, tokenHeader)

export const registerAdditionalPersonalInfo = (drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus) => axios.patch(`/user/v1/register/${userId}/additionalPersonalInfo`, { drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus }, tokenHeader)

export const registerAcademic = (passYear, option, academicStream, courseName, country, university, institute, college) => axios.patch(`/user/v1/register/${userId}/academic`, { passYear, option, academicStream, courseName, country, university, institute, college }, tokenHeader)

export const registerOccupation = (annualIncome, option, country, state, district, city) => axios.patch(`/user/v1/register/${userId}/occupation`, { annualIncome, option, country, state, district, city }, tokenHeader)

export const registerOccupationCategory = (jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/user/v1/register/${userId}/occupationCategory`, { jobCategory, jobType, designation, stream, companyName, department }, tokenHeader)

export const registerFamily = (fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings) => axios.patch(`/user/v1/register/${userId}/family`, { fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings }, tokenHeader)

export const registerFamilyAddress = (familyName, homeTown, pincode, contactNumber, homeContactNumber, diocese) => axios.patch(`/user/v1/register/${userId}/familyAddress`, { familyName, homeTown, pincode, contactNumber, homeContactNumber, diocese }, tokenHeader)

export const getAllCountries = () => axios.get('/data/general/getAllCountries', tokenHeader)

export const getAllStates = (country) => axios.get(`/data/general/state?country=${country}`, tokenHeader)

export const getAllDistricts = (state) => axios.get(`/data/general/district?state=${state}`, tokenHeader)

export const getAllMotherToungues = (state) => axios.get(`/data/general/motherToungue?state=${state}`, tokenHeader)

export const getAllReligion = () => axios.get('/data/general/getAllReligion', tokenHeader)

export const getAllCaste = (religion) => axios.get(`/data/general/caste?religion=${religion}`, tokenHeader)

export const getAllAcademicStream = () => axios.get('/data/general/getAllAcademicStream', tokenHeader)

export const getAllCourse = (stream) => axios.get(`/data/general/course?stream=${stream}`, tokenHeader)

export const getAllPincode = () => axios.get('/data/general/getAllPincode', tokenHeader)

export const getAllHomeTown = () => axios.get('/data/general/getAllHomeTown', tokenHeader)

export const getAllCities = (state) => axios.get(`/data/general/city?state=${state}`, tokenHeader)

export const getAllUniversities = (country) => axios.get(`/data/general/getAllUniversities?country=${country}`, tokenHeader)

export const getAllInstitutes = (country) => axios.get(`/data/general/getAllInstitutes?country=${country}`, tokenHeader)

export const getAllColleges = (country) => axios.get(`/data/general/getAllColleges?country=${country}`, tokenHeader)

export const getAllDesignations = (stream) => axios.get(`/data/general/getAllDesignations?stream=${stream}`, tokenHeader)

export const getAllJobStreams = () => axios.get(`/data/general/getAllJobStreams`, tokenHeader)

export const quickSignupAboutYou = (firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus) => axios.patch(`/user/v1/register/${userId}/aboutYouQuick`, { firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus }, tokenHeader)

export const quickSignupNative = (country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/user/v1/register/${userId}/addNativeQuick`, { country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department }, tokenHeader)

export const uploadImage = (imgAfterCrop) => axios.post(`/user/v1/uploadImage/postImage?userId=${userId}`, { imgAfterCrop }, tokenHeader)

export const uploadVideo = (formData) => axios.post(`/user/v1/uploadVideo/postVideo?userId=${userId}`, formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})