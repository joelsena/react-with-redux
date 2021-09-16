const initialState = 0

export type AccountState = number

const ACTION_TYPES = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw'
}

export default function reducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case ACTION_TYPES.DEPOSIT:
            return state + action.payload
        case ACTION_TYPES.WITHDRAW:
            return state - action.payload
        default:
            return state
    }
}

// Actions
export const deposit = (amount: number) => ({
    type: ACTION_TYPES.DEPOSIT,
    payload: amount
})

export const withdraw = (amount: number) => ({
    type: ACTION_TYPES.WITHDRAW,
    payload: amount
})