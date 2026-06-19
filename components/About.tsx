import AboutImageSlider from "@/components/AboutImageSlider";
import { formatMultilineText, splitTitleLines } from "@/lib/utils";

interface AboutProps {
  title: string;
  description: string;
  images: { image: string }[];
}

export default function About({ title, description, images }: AboutProps) {
  const titleLines = splitTitleLines(title);

  return (
    <section className="about section-gap">
      <div className="container">
        <div className="about__wrapper">
          <h2 className="about__title title-main">
            {titleLines.map((line, index) => {
              const parts = line.split(/(x)/i);

              return (
                <span key={index} className="about__title-line">
                  {parts.map((part, partIndex) =>
                    part.toLowerCase() === "x" ? (
                      <span key={partIndex} className="about__title-x">
                        {part}
                      </span>
                    ) : (
                      <span key={partIndex}>{part}</span>
                    )
                  )}
                  {index < titleLines.length - 1 ? <br /> : null}
                </span>
              );
            })}
          </h2>
          <div className="about__description rich-text">
            {formatMultilineText(description)
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
      <div className="container">
        <AboutImageSlider images={images} />
      </div>
    </section>
  );
}
