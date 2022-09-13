import {InitStateHome, reducerHome} from "./home.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface RootState {
  home: InitStateHome
}

export const reducers: ActionReducerMap<RootState> = {
  home: reducerHome
}
