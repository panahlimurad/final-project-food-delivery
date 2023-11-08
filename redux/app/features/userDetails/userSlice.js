import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        data: null
    },
    reducers:{
        dataUser: (state,action)=>{
            state.data = action.payload 
        }
    }
})

export const {dataUser} = userSlice.actions
export default userSlice.reducer