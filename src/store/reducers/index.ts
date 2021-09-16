import { combineReducers } from 'redux'
import account, { AccountState } from './account'

export interface IRootState {
    readonly account: AccountState
}

export const reducers = combineReducers({
    account
})