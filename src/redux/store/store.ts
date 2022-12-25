import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {controllerReducer} from "../slice/controllers.slice";

const comb = combineReducers({
    controllers:controllerReducer
});

const setupStore = () => configureStore({
    reducer:comb,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

type RootState = ReturnType<typeof comb>
type setup = ReturnType<typeof setupStore>
type AppDispatch = setup['dispatch']

export type {
    RootState,
    setup,
    AppDispatch
}

export {
    setupStore
}