const {default: Types} = require('./type');

export const updateData = (latitude, longitude, onError = () => {}) => {
  return (dispatch, getState) => {
    let url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=e507427d55b61a434a9b37fba828156f';
    // Call the API, and set the state of the weather forecast
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTimeout(
          () =>
            dispatch({
              type: Types.UPDATE_DATA,
              payload: data,
            }),
          1000,
        );
      })
      .catch(error => {
        if (error) {
          dispatch(setError(err.message));
          onError();
        }
      });
  };
};

const setError = err => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
