export function Card({title, discount, category, imageSrc, style}) {
  return (
    <div className="card">
      <div><img className="card__image" alt="card" src={imageSrc + '.png'} /></div>
      <div className="card__text">
        <div className="card__title">{title}</div>
        <div className="card__discount" style={style}>{discount}</div>
        <div className="card__category">{category}</div>
      </div>
    </div>
  );
}
