import { combineReducers } from "redux";
import SelectedCityReducer from "./selectedCityReducer"
import FavoritesCityReducer from "./favoritesCityReducer"

export default combineReducers({
  selectedCityData: SelectedCityReducer,
  favoritesCityData: FavoritesCityReducer
});