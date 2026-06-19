import Image from "next/image";

const SITEMAP_LINKS = [
  "Case Studies",
  "Services",
  "About",
  "Career",
  "Blog",
  "News",
  "Vacancies",
];

const SOCIAL_LINKS = ["Instagram", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__content">
              <div className="footer__links">
                <div className="footer__list">
                  <p className="footer__list-title">sitemap</p>
                  <div className="footer__list-items">
                    {SITEMAP_LINKS.map((link) => (
                      <span key={link} className="footer__link">
                        {link}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="footer__list">
                  <p className="footer__list-title">Follow us on</p>
                  <div className="footer__list-items">
                    {SOCIAL_LINKS.map((link) => (
                      <span key={link} className="footer__link">
                        {link}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="footer__list">
                  <p className="footer__list-title">office</p>
                  <div className="footer__text">
                    <span>Alibeyov Gardashlari 27,</span>
                    <span>Sabail, Sabah Residence</span>
                  </div>
                </div>

                <div className="footer__list">
                  <p className="footer__list-title">For partnerships</p>
                  <div className="footer__text">
                    <span className="footer__link footer__link--mail">
                      partnership@wemark.az
                    </span>
                    <span>+994 51 555 55 55</span>
                  </div>
                </div>
              </div>
              <div className="footer__scroll-top footer__scroll-top--desktop">
                <Image
                  src="/images/footer-arrow.svg"
                  alt=""
                  width={70}
                  height={52}
                  aria-hidden
                />
              </div>
            </div>

            <div className="footer__logo">
              <Image
                src="/images/logo-footer.svg"
                alt="Wemark"
                width={970}
                height={155}
              />
            </div>
          </div>

          <div className="footer__bottom footer__bottom--desktop">
            <div className="footer__bottom-created">
              <span className="footer__copyright">Copyright © 2024 Wemark</span>
              <span className="footer__terms">terms & privacy</span>
            </div>
            <div className="footer__lang">
              <Image
                src="/images/globe.svg"
                alt=""
                width={22}
                height={22}
                aria-hidden
                style={{ filter: "invert(1) brightness(3)" }}
              />
              <span className="footer__lang-link">AZərbaycan dİLİ</span>
            </div>
          </div>

          <div className="footer__bottom footer__bottom--mobile">
            <div className="footer__lang footer__lang--mobile">
              <Image
                src="/images/globe.svg"
                alt=""
                width={22}
                height={22}
                aria-hidden
                style={{ filter: "invert(1) brightness(3)" }}
              />
              <span className="footer__lang-link">AZERBAIJANi</span>
              <span className="footer__lang-divider" />
              <span className="footer__lang-link">ENGLISH</span>
            </div>
            <div className="footer__mobile-logo">
              <Image
                src="/images/logo-footer.svg"
                alt="Wemark"
                width={320}
                height={51}
              />
            </div>
            <div className="footer__mobile-meta">
              <span className="footer__copyright">Copyright © 2024 Wemark</span>
              <span className="footer__scroll-up-btn">
                BACK TO TOP
                <Image
                  src="/images/arrow-up.svg"
                  alt=""
                  width={12}
                  height={14}
                  aria-hidden
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
