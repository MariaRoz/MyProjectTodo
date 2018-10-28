import {history} from '../helpers/history';

export function login(username, password) {
    return dispatch => {
        dispatch(request({username}));
        if (username === localStorage.getItem('username') && password === localStorage.getItem('pw')){
            dispatch(success(username, password));
            history.push('/');
        }
        else {
            dispatch(failure("Invalid username or password"));
        }
    };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

export function register(user) {
    return dispatch => {
        dispatch(request(user));
        if(user){
            dispatch(success());
            history.push('/login');
        }
        else {
            dispatch(failure());
        }
    };

    function request(user) { return { type: 'REGISTER_REQUEST', user } }
    function success(user) { return { type: 'REGISTER_SUCCESS', user } }
    function failure(error) { return { type: 'REGISTER_FAILURE', error } }
}

