import { combineReducers } from 'redux';

import registerReducer from '../scenes/Register/data/reducer';
import ktmDataReducer from '../scenes/KTM/data/reducer';

export default combineReducers({
    registerReducer,
    ktmDataReducer
})