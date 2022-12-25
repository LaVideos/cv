import {createSlice} from "@reduxjs/toolkit";

export interface ControllersSliceProps {
    isBurgerActive: boolean;
    isAnimationPrintOff:boolean;
}

const initialState: ControllersSliceProps = {
    isBurgerActive: false,
    isAnimationPrintOff:false,
};

const controllerSlice = createSlice({
    name: 'controllerSlice',
    initialState,
    reducers: {
        setBurgerState(state, action) {
            state.isBurgerActive = action.payload;
        },
        setAnimationPrintState(state,action){
            state.isAnimationPrintOff = action.payload;
        }
    }
});


const {reducer: controllerReducer, actions: {setBurgerState,setAnimationPrintState}} = controllerSlice;


const controllerAction = {
    setBurgerState,
    setAnimationPrintState
}

export {
    controllerReducer,
    controllerAction
}