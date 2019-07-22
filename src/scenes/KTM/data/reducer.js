import { GET_DATA, SET_DATA } from './action';

const initialState = {
    ktmData: []
}
export default function ktmDataReducer(state=initialState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                ktmData: data
            }

        case SET_DATA:
            return {
                ...state,
                setKTMData: data
            }

        default:
            return state
    }
}