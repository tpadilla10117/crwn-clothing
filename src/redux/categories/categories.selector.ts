import { createSelector } from 'reselect'; //memoizes selectors
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.type';

//input Selectors: give us parameters we need to determine selector output
const selectCategoryReducer = (state): CategoriesState => state.categories;

//memoize the selectCategories:
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

//Memoized Selector in Redux:
    //unless the array changes, just use a memoized value instead
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => categories.reduce( (acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {} as CategoryMap)
) 