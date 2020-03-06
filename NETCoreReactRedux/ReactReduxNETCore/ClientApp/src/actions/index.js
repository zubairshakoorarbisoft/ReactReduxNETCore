import jsonPlaceholder from "../apis/jsonPlaceholder";
import weatherForcastApi from "../apis/myAPI";
import _ from 'lodash';


// Second way (Use an action creator inside another action creator) to user specific call for specific data

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

  await dispatch(fetchPosts());
  
  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(uid => dispatch(fetchUser(uid)))
  .value();


};

export const fetchPosts = () => {
 
  return async function(dispatch, getState){
      const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  }
};

export const getLoggedInStatus = () => {

    return async function (dispatch, getState) {
        const response = await weatherForcastApi.get('/Account/isUserAuthenticated');
        dispatch({ type: 'FETCH_Is_LOGGED_IN', payload: response.data });
    }
};

export const fetchWeatherForcasts = () => {
 
  return async function(dispatch, getState){
      const response = await weatherForcastApi.get('/WeatherForecast');     
      dispatch({ type: 'FETCH_WEATHERS', payload: response.data });
  }
};

// Requesting Without Memoization
export const fetchUser = (id) => {
 
  return async function(dispath, getState){
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispath({type: 'FETCH_USER', payload: response.data});
  }
};


//#region Funcotion Memonization Start

// Requesting With Memoization
// export const fetchUser = (id) => (dispatch, getState) => {
 
// _fetchUser(id, dispatch);
// };
// Function Memoization

// const _fetchUser = _.memoize(async function(id, dispatch){
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// });

//#end Funcotion Memonization End