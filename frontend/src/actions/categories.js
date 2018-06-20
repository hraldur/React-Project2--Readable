import api from "../utils/api";
import {
  GET_CATEGORIES
} from "./types";

export const getCategories = ({ categories }) => {
  return {
    type: GET_CATEGORIES,
    categories
  };
};

export const asyncGetCategories = dispatch => () => {
  api.getCategories().then(categories => dispatch(getCategories(categories)));
};
