interface BannerProps {
  title: string;
}

import { splitTitleLines } from "@/lib/utils";

export default function Banner({ title }: BannerProps) {
  const lines = splitTitleLines(title);

  return (
    <>
      <div className="banner__overlay" />
      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <div className="banner__title">
              <h1>
                {lines.map((line, index) => (
                  <div key={index} className="banner__title-line">
                    <p>{line}</p>
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}