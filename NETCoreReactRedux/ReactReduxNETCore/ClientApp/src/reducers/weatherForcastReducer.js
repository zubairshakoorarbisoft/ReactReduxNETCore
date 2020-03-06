export default (state = [], action) => {
    debugger
    switch (action.type) {
      case "FETCH_WEATHERS":
        return action.payload;
      default:
        return state;
    }
  };
  