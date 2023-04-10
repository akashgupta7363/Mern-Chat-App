import {createSlice} from '@reduxjs/toolkit';
import appApi from '../services/appApi' ;

export const userSlice =createSlice({
   name: 'user',
   initialState: null,
   reducers: {
      addNotifiations: (state, {payload})=>{},
      resetNotifications: (state,{payload})=>{},
   },

   extraReducers: (builder)=>{
      builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled,(state,{payload})=>payload);
      builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled,(state,{payload})=>payload);builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled,()=>null);
   },
});
 export const {addNotifiations,resetNotifications}= userSlice.actions;
 export default userSlice.reducers;
