import {controllerAction,controllerReducer} from "./slice/controllers.slice";
import {RootState,setup,setupStore,AppDispatch} from "./store/store";


export {
    controllerAction,controllerReducer,setupStore
}

export type {
    RootState,
    setup,
    AppDispatch
}