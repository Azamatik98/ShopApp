function Header() {
  return (
    <nav className="red darken-2">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Fortnite Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Azamatik98/ShopApp"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
