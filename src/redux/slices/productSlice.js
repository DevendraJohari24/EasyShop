import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 1,
}

export const accountSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.amount += 1;
        }
    }
});

export const { increment } = accountSlice.actions;
export default accountSlice.reducer;
