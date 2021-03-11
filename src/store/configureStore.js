import {createStore} from 'redux';
import rootReducer from '../services/reducers/index'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}