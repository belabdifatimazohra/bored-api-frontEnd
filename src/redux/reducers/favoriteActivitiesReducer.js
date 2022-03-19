const intialState = { favoriteActivities: [] };

export const favoriteActivitiesReducer = (state = intialState, action) => {
  // Used to update the state each time the action change
  let newState;
  // Change the state  according to the action CAPITAL LETTRES
  switch (action.type) {
    // Initialiser le redux avec le contenue du localStorage
    case "INIT":
      const fav = JSON.parse(localStorage.getItem("favorites")) || []
      return { favoriteActivities: fav };

    case "ADD":
      //newState = JSON.parse(localStorage.getItem("favorites")) ? [] [state.favoriteActivities,action.payload] : [...state.favoriteActivities,action.payload];
      localStorage.setItem("favorites", JSON.stringify([...state.favoriteActivities, action.payload]));
      return { favoriteActivities: [...state.favoriteActivities, action.payload] };
    case "DELETE":
      // Filter the list # to the one deleted and return it as the new state of the favorit activities
      console.log(state.favoriteActivities);
      newState = JSON.parse(localStorage.getItem("favorites")).filter(
        (activity) => activity.id !== action.payload.id);
      console.log(newState);
      localStorage.setItem("favorites", JSON.stringify(newState))
      return { favoriteActivities: [newState, action.payload] };
    case "EMPTY":
      return {
        favoriteActivities: [],
      };
    default:
      return state;
  }
};
