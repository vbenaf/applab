import * as API from '../api/index';

export const loginAction = () => async(dispatch) =>{
   await API.login();
}