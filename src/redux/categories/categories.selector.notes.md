<!-- Description of what's going on in the categories.selector.js -->

<!-- /* export const selectCategoriesMap = (state) => state.categories.categoriesMap; */

//input Selectors: give us parameters we need to determine selector output
const selectCategoryReducer = (state) => state.categories;

//two arguments for memoized selectors:
//1) input selector array, 2) output selector
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);


//Redux Code:
/* export const selectCategoriesMap = (state) => state.categories.categories
    .reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
}, {}); */


//Memoized Selector in Redux:
    //unless the array changes, just use a memoized value instead
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce( (acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, [])
)  -->