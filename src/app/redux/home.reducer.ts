import {Action, createReducer} from "@ngrx/store";

export interface InitStateHome {
  sidePanel: boolean
}

export const initialState: InitStateHome = {
  sidePanel: false
}

const featureReducer = createReducer(
  initialState
)

export function reducerHome(state: InitStateHome | undefined, action: Action ): any {
  return featureReducer(state, action)
}
