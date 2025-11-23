import axios from 'axios';
import constants from '../../../services/constants';
// Action types
export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

// Action creators
export const fetchMenuRequest = () => ({
    type: FETCH_MENU_REQUEST
});

export const fetchMenuSuccess = (menu) => ({
    type: FETCH_MENU_SUCCESS,
    payload: menu
});

export const fetchMenuFailure = (error) => ({
    type: FETCH_MENU_FAILURE,
    payload: error
});

// Thunk action creator for fetching menu data
export const fetchMenu = (menuLocation) => {
    return async (dispatch) => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axios.get(`${constants.API_BASE_URL}header`, {
                params: { location: menuLocation },
                headers: { 'Content-Type': 'application/json' }
            });
            dispatch(fetchMenuSuccess(response.data.headers)); // Adjust based on actual response structure
        } catch (error) {
            dispatch(fetchMenuFailure(error.message));
        }
    };
};
