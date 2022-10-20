import { createSlice } from "@reduxjs/toolkit"
import auth from "../config/httpConfig"

export const userAuth = createSlice({
    name: 'todo',
    initialState:{
        data: []
    },
    reducers: {
        authEntification: (state, action) => {
            state.data = [...action.payload]
          }
    }
})
export const authUser = (data) => async () => {
    try {
      // console.log(data);
      const response = await auth.authenfication(data)

     return response
      //return response
    } catch (err) {
      throw new Error(err)
    }
  }

export const { authEntification } = userAuth.actions
export default userAuth.reducer