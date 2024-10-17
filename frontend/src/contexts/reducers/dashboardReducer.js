export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DASHBOARD_DATA':
      return {
        ...state,
        dashboardData: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
