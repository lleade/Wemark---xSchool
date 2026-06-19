import Image from "next/image";
import type { Founder as FounderType } from "@/lib/api";
import { formatMultilineText } from "@/lib/utils";

interface FounderProps {
  founder: FounderType;
}

export default function Founder({ founder }: FounderProps) {
  const paragraphs = formatMultilineText(founder.description)
    .split("\n\n")
    .filter(Boolean);

  return (
    <section className="founder section-gap">
      <div className="container">
        <h2 className="founder__title-desktop title-secondary">{founder.title}</h2>
        <div className="founder__wrapper">
          <h3 className="founder__subtitle title-secondary founder__subtitle--mobile">
            {founder.title}
          </h3>

          <div className="founder__profile">
            <div className="founder__image">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 650px) 33.5rem, 52.2rem"
                className="founder__photo"
              />
              <div className="founder__badge">
                <span className="founder__badge-name">{founder.name} -</span>{" "}
                <span className="founder__badge-position">{founder.position}</span>
              </div>
            </div>
            <p className="founder__name founder__name--mobile">{founder.name}</p>
            <p className="founder__position founder__position--mobile">
              {founder.position}
            </p>
          </div>

          <div className="founder__content">
            <div className="founder__description rich-text">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}