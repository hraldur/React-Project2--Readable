import api from "../utils/api";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = ({ categories }) => {
  return {
    type: GET_CATEGORIES,
    categories
  };
};

export const asyncGetCategories = dispatch => () => {
  api.getCategories().then(categories => dispatch(getCategories(categories)));
};
