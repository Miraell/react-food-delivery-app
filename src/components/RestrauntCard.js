export function RestrauntCard({name, time, price, imageSrc}) {
  const categories = ['sushi', 'burger'];
  return (
    <div className="restraunts-item">
      <div className="restraunts-item__top restraunts-item__top__featured">
        <img alt="restraunt-item" src={imageSrc} />
      </div>
      <div className="restraunts-item__bottom">
        <div>
          <span className="restraunts-item__name">{name}</span>
        </div>
        <div>
          <span className="restraunts-item__time">{time}</span>
          <span className="restraunts-item__price">${price} min sum</span>
        </div>
        <div>
          {categories.map((name) => <button className="restraunts-item__category"><img alt="category-item" src={'/icons/' + name + '.png'} />{name}</button>)}
        </div>
      </div>
    </div>
  );
}
