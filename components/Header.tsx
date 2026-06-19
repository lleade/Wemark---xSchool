const NAV_LINKS = [
  "About",
  "Services",
  "Case Studies",
  "Career",
  "Blog",
  "xSchool",
];

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__logo" aria-label="Wemark">
            <span className="header__logo-text">wemark</span>
          </div>

          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link} className="header__item">
                <span className="header__link">{link}</span>
              </li>
            ))}
          </ul>

          <span className="header__cta">Let&apos;s Talk</span>
          <span className="header__menu">Menu</span>
        </nav>
      </div>
    </header>
  );
}
