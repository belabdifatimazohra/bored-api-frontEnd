// Init with local storage
export const initFavorite = (payload) => {
  return { type: "INIT", payload };
};
// Add to the favorite list  of activities
export const addToFavorite = (payload) => {
    return { type: "ADD", payload };
  };
  // Delete task from the favorite list of activities
  export const deletFromFavorite = (payload) => {
    return { type: "DELETE", payload };
  };