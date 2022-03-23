const initialState = {
  restraunts: [
    {name: 'Royal Sushi House', time: '30 - 40 min', price: 32, imageSrc: 'royal_sushi_house.png', show: true, categories: ['sushi']},
    {name: 'Burgers & Pizza', time: '40 - 60 min', price: 24, imageSrc: 'burgers_and_pizza.png', show: true, categories: ['burger']},
    {name: 'Ninja sushi', time: '20 - 40 min', price: 100, imageSrc: 'ninja_sushi.png', show: true, categories: ['pizza']},
  ],
  categoryFilters: [
    {name: 'Pizza', alias: 'pizza', isActive: false},
    {name: 'Burger', alias: 'burger', isActive: false},
    {name: 'BBQ', alias: 'meat', isActive: false},
    {name: 'Sushi', alias: 'sushi', isActive: false},
    {name: 'Vegan', alias: 'broccoli', isActive: false},
    {name: 'Desserts', alias: 'cake', isActive: false}
  ]
}

export const restrauntsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'restraunts/toggleCategoryFilter': 
      const categoryFilters = state.categoryFilters.map(category => {
        if (category.alias !== action.alias) {
          return category;
        }
        return {...category, isActive: !category.isActive};
      });


      const restraunts = state.restraunts.map(restraunt => {
        if (!categoryFilters.filter(filter => filter.isActive).length) {
          return {...restraunt, show: true};
        }

        const activeFilters = categoryFilters.filter(filter => filter.isActive);
        const show = restraunt.categories.some(category => activeFilters.findIndex(filter => filter.alias === category) !== -1);

        return {...restraunt, show}
      });

      return {...state, categoryFilters, restraunts};
    case 'restraunts/removeCategoryFilter': 


      break;
    default:
      return state;
  }
}
