import {useSelector} from 'react-redux';
import {Category} from './Category';

export function Categories() {
  const categories = useSelector(state => state.restraunts.categoryFilters);

  return (
    <div className="category-wrapper">
        {categories.map((item, index) => <Category key={index} {...item} />)}
    </div>
  );
}
