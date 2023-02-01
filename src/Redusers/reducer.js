const initialState = {
  characters: [],
  person: {},
  comics: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_CARDS":

      return {
        ...state,
        characters: action.payload.characters,
      };

    case "GET_COMICS":

      return {
        ...state,
        comics: action.payload.comics,
      };

    case "CARD_INFO":

      return {
        ...state,
        person: [...state.characters.filter((item)=> item.id === action.payload.id)]
      };

    default:

      return state;
  }
};
export default reducer;
