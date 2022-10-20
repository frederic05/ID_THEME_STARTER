import { createSlice } from "@reduxjs/toolkit"
import auth from "../config/httpConfig"

export const opeSlice = createSlice({
    name: 'todo',
    initialState:{
        data: []
    },
    reducers: {
        getLigneOp: (state, action) => {
            state.data = [...action.payload]
          }
    }
})

export const { getLigneOp } = opeSlice.actions

//liste des opérations
export const getTodoAsync = () => async (dispatch) => {
    try {
      const response =  await auth.ligneOperationList()
      dispatch(getLigneOp(response.data.data))
    } catch (err) {
      throw new Error(err)
    }
  }
//Ajout ligne opération
  export const addLigneOp = (data) => async () => {
    try {
      // console.log(data);
      const response = await auth.ligneOperationAdd(data)

     return response
      //return response
    } catch (err) {
      throw new Error(err)
    }
  }

  export const showTodo = (state) => state.ope.data
  export default opeSlice.reducer