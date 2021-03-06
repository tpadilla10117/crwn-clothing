import { createAction } from "../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export const setCategories= (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);