import {Action, createReducer, on} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "./home.actions";

export interface InitStateHome {
  sidePanel: boolean
}

export const initialState: InitStateHome = {
  sidePanel: false
}

const featureReducer = createReducer(
  initialState,
  on(openSidePanel, (state) => ({...state, sidePanel: true})),
  on(closeSidePanel, (state) => ({...state, sidePanel: false}))
)

export function reducerHome(state: InitStateHome
  | undefined, action: Action ): any {
  return featureReducer(state, action)
}
