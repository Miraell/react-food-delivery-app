import { useDispatch } from 'react-redux';

export function Category({name, alias, isActive}) {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch({type: 'restraunts/toggleCategoryFilter', alias})} className={'category-item ' + (isActive ? 'category-item-active' : '')}>
      <img alt="category-item" src={'/icons/' + alias + '.png'} /><br />
      {name}
    </div>
  );
}
