import axios from '../axios'

const userId = localStorage.getItem("userId")

export const getUserDetails = () => axios.get(`/api/v1/getUserData?userId=${userId}`)

export const registerUser = (phone) => axios.post('/api/v1/register/mobile', { phone })

export const registerAboutYou = (firstName, lastName, displayName, dob, gender) => axios.patch(`/api/v1/register/${userId}/aboutYou`, { firstName, lastName, displayName, dob, gender })

export const registerNative = (country, state, district, motherToungue) => axios.patch(`/api/v1/register/${userId}/native`, { country, state, district, motherToungue })

export const registerPersonalInfo = (maritalStatus, bodyType, physicalStatus, religion, caste, height, weight) => axios.patch(`/api/v1/register/${userId}/personalInfo`, { maritalStatus, bodyType, physicalStatus, religion, caste, height, weight })

export const registerAdditionalPersonalInfo = (drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus) => axios.patch(`/api/v1/register/${userId}/additionalPersonalInfo`, { drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus })

export const registerAcademic = (passYear, option, academicStream, courseName, country, university, institute, college) => axios.patch(`/api/v1/register/${userId}/academic`, { passYear, option, academicStream, courseName, country, university, institute, college })

export const registerOccupation = (annualIncome, option, country, state, district, city) => axios.patch(`/api/v1/register/${userId}/occupation`, { annualIncome, option, country, state, district, city })

export const registerOccupationCategory = (jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/api/v1/register/${userId}/occupationCategory`, { jobCategory, jobType, designation, stream, companyName, department })

export const registerFamily = (fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings) => axios.patch(`/api/v1/register/${userId}/family`, { fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings })

export const registerFamilyAddress = (familyName, homeTown, pincode, contactNumber, homeContactNumber, diocese) => axios.patch(`/api/v1/register/${userId}/familyAddress`, { familyName, homeTown, pincode, contactNumber, homeContactNumber, diocese })

export const getAllCountries = () => axios.get('/api/data/general/getAllCountries')

export const getAllStates = (country) => axios.get(`/api/data/general/state?country=${country}`)

export const getAllDistricts = (state) => axios.get(`/api/data/general/district?state=${state}`)

export const getAllMotherToungues = (state) => axios.get(`/api/data/general/motherToungue?state=${state}`)

export const getAllReligion = () => axios.get('/api/data/general/getAllReligion')

export const getAllCaste = (religion) => axios.get(`/api/data/general/caste?religion=${religion}`)

export const getAllAcademicStream = () => axios.get('/api/data/general/getAllAcademicStream')

export const getAllCourse = (stream) => axios.get(`/api/data/general/course?stream=${stream}`)

export const getAllPincode = () => axios.get('/api/data/general/getAllPincode')

export const getAllHomeTown = () => axios.get('/api/data/general/getAllHomeTown')

export const getAllCities = (state) => axios.get(`/api/data/general/city?state=${state}`)

export const getAllUniversities = (country) => axios.get(`/api/data/general/getAllUniversities?country=${country}`)

export const getAllInstitutes = (country) => axios.get(`/api/data/general/getAllInstitutes?country=${country}`)

export const getAllColleges = (country) => axios.get(`/api/data/general/getAllColleges?country=${country}`)

export const getAllDesignations = (stream) => axios.get(`/api/data/general/getAllDesignations?stream=${stream}`)

export const getAllJobStreams = () => axios.get(`/api/data/general/getAllJobStreams`)

export const quickSignupAboutYou = (firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus) => axios.patch(`/api/v1/register/${userId}/aboutYouQuick`, { firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus })

export const quickSignupNative = (country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department) => axios.patch(`/api/v1/register/${userId}/addNativeQuick`, { country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department })

export const uploadImage = (imgAfterCrop) => axios.post(`/api/v1/uploadImage/postImage?userId=${userId}`, { imgAfterCrop })

export const uploadVideo = (formData) => axios.post(`/api/v1/uploadVideo/postVideo?userId=${userId}`, formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})