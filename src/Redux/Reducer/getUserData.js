import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  data: {}
}

const getUserData = createSlice({
  name: 'userDetails',
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, data) => {
      state.data = data.payload
    }
  }
})

export const { setUserData } = getUserData.actions;
export default getUserData.reducer;