const menuItems = ['Restraunts', 'Deals', 'My orders'];

const toggleMenu = () => {
  console.log(document.querySelector('.header__menu').style.display)
  if (document.querySelector('.header__menu').style.display !== 'none') {
     document.querySelector('.header__menu').style.display = 'none';
  } else {
     document.querySelector('.header__menu').style.display = 'block';
  }
}

export function Header() {
  return (
    <header className="header__container">
      <div className="header__logo">
        <span className="header__logo__primary">Food</span><br />
        <span className="header__logo__secondary">delivery</span>
      </div>

      <input placeholder="Search" className="header__input" />

      <nav className="header__menu">
        <ul>
          {menuItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </nav>

      <button data-count="4" className="header__button header__button__notification"></button>
      <button className="header__button header__button__profile"></button>
      <button onClick={toggleMenu} className="header__button header__button__menu"></button>
    </header>
  );
}

