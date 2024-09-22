import {createSlice} from '@reduxjs/toolkit';

const App = createSlice({
  name: 'patienApp',
  initialState: {
    authentication: {},
    slots: {},
    internet: true,
    temp_regid: '',
    temp_data: {},
    temp_add: {},
    step1Data: {},
    step2Data: {
      state: 'Tamil nadu',
      country: 'India',
    },
    step3Data: {},
    user_name: '',
    filterBy:[],
  },
  reducers: {
    setAuthentication: (state, action) => {
      state.authentication = action.payload?.userdata;
    },
    setinternetstatus: (state, action) => {
      state.internet = action.payload?.internet;
    },
    settemp_regid: (state, action) => {
      state.temp_regid = action.payload?.id;
      state.temp_data = action.payload.temp_data;
    },
    setUsername: (state, action) => {
      state.user_name = action.payload;
    },
    settemp_add: (state, action) => {
      state.temp_add = action.payload?.address;
    },
    step1Red: (state, action) => {
      console.log(action, 'action disoatc');
      state.step1Data = action?.payload;
    },
    step2Red: (state, action) => {
      console.log(action, 'step 2 action');
      state.step2Data = action?.payload;
    },
    step3Red: (state, action) => {
      state.step3Data = action?.payload;
    },
    clear: (state, action) => {
      state.drawyer = false;
      state.fcm_token = '';
      state.step1Data = {};
      state.step2Data = {};
      state.step3Data = {};
    },
    setActivityPayload: (state, action) => {
      state.filterBy.push(action?.payload)
    },
    removeActivityPayload: (state, action) => {
      state.filterBy = state.filterBy.filter(data => {return data != action?.payload})
    },
    clearActivityPayload : (state,action)=> {
      state.filterBy = []
    },
    clearAuth: (state, action) => {
      // console.log(state,"aiduniu")
      // state = {}
      state.authentication = '';
    },
  },
});

export const {
  setAuthentication,
  clear,
  setinternetstatus,
  settemp_regid,
  settemp_add,
  step1Red,
  step2Red,
  step3Red,
  clearAuth,
  setUsername,
  setActivityPayload,
  removeActivityPayload,
  clearActivityPayload,
} = App.actions;

export default App.reducer;
