import { createContext, useReducer } from "react";
import { formatDate } from "../helpers/helperFunctions";
const todayDate = new Date();
const checkinDate = new Date();
const checkoutDate = new Date();
checkinDate.setDate(todayDate.getDate() + 14);
checkoutDate.setDate(checkinDate.getDate() + 3);

const INITIAL_STATE = {
  destination: "",
  checkin: formatDate(checkinDate),
  checkout: formatDate(checkoutDate),
  numberOfAdults: 1,
  numberOfRooms: 1,
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "new_search":
      return action.payload;
    case "reset_search":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        checkin: state.checkin,
        checkout: state.checkout,
        numberOfAdults: state.numberOfAdults,
        numberOfRooms: state.numberOfRooms,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
