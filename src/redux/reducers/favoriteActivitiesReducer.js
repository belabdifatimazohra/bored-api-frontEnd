const intialState = { favoriteActivities: [] };

export const favoriteActivitiesReducer = (state = intialState, action) => {
  // Used to update the state each time the action change
  let newState;
  // Change the state  according to the action CAPITAL LETTRES
  switch (action.type) {
    case "ADD_favoriteActivities":
      return {
        favoriteActivities: action.payload,
      };
    case "DELETE":
      // Filter the list # to the one deleted and return it as the new state of the favorit activities
      newState = state.favoriteActivities.filter(
        (activity) => activity.id !== action.payload.id
      );
      return { favoriteActivities: newState };
    case "EMPTY":
      return {
        favoriteActivities: [],
      };
    default:
      return state;
  }
};
