import {
  GET_CHARACTERS,
  RESET_PAGE,
  GET_CHARACTER_NAME,
  CLEAN_DETAIL,
  GET_GENDERS,
  FILTER_BY_ORDER,
  FILTER_GENDERS,
  FILTER_CHARACTERS,
  FILTER_STATUS,
  GET_CHARACTER_ID,
} from "./actions";

const initialState = {
  characters: [],
  currentPage: 1,
  characterDetail: [],
  genders: [],
  charactersAll: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_GENDERS:
      return { ...state, genders: action.payload };
    case GET_CHARACTER_ID:
      return { ...state, characterDetail: action.payload };
    case RESET_PAGE:
      return { ...state, currentPage: action.payload };
    case CLEAN_DETAIL:
      return { ...state, characters: [], characterDetail: [] };
    case GET_CHARACTER_NAME:
      return { ...state, characters: action.payload };
    case FILTER_BY_ORDER:
      return { ...state, characters: action.payload };
    case FILTER_GENDERS:
      const all = state.charactersAll;
      const filtered =
        action.payload === "all"
          ? all
          : all.filter((element) => element.gender == action.payload);
      console.log(filtered);
      return { ...state, characters: filtered };
    case FILTER_CHARACTERS:
      const filterCharacters = state.charactersAll;
      const filteredCharacters =
        action.payload === "db"
          ? filterCharacters.filter((el) => el.createdInDb === true)
          : filterCharacters.filter((el) => el.created === false);
      return { ...state, characters: filteredCharacters };
    case FILTER_STATUS:
      const filterStatus = state.charactersAll;
      const filteredStatus = filterStatus.filter(
        (element) => element.status == action.payload
      );
      return { ...state, characters: filteredStatus };
    default:
      return { ...state };
  }
};

export default rootReducer;
