import axios from '../axios'

const userId = localStorage.getItem("userId")

export const registerUser = (phone) => axios.post('/register/mobile', { phone })

export const registerAboutYou = (firstName, lastName, displayName, dob, gender) => axios.patch(`/register/${userId}/aboutYou`, { firstName, lastName, displayName, dob, gender })

export const registerNative = (country, state, district, motherToungue) => axios.patch(`/register/${userId}/native`, { country, state, district, motherToungue })

export const registerPersonalInfo = () => axios.patch(`/register/${userId}/personalInfo`)

export const registerAdditionalPersonalInfo = (drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus) => axios.patch(`/register/${userId}/additionalPersonalInfo`, { drinkingHabits, smokingHabits, foodHabits, bloodGroup, license, financialStatus })

export const registerAcademic = () => axios.patch(`/register/${userId}/academic`)

export const registerOccupation = () => axios.patch(`/register/${userId}/occupation`)

export const registerOccupationCategory = () => axios.patch(`/register/${userId}/occupationCategory`)

export const registerFamily = () => axios.patch(`/register/${userId}/family`)

export const registerFamilyAddress = () => axios.patch(`/register/${userId}/familyAddress`)

export const getAllCountries = () => axios.get('/api/data/general/getAllCountries')

export const getAllStates = (country) => axios.get(`/api/data/general/state?country=${country}`)

export const getAllDistricts = (state) => axios.get(`/api/data/general/district?state=${state}`)

export const getAllMotherToungues = (state) => axios.get(`/api/data/general/motherToungue?state=${state}`)