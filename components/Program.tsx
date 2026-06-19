import type { Program as ProgramType } from "@/lib/api";

interface ProgramProps {
  program: ProgramType;
}

export default function Program({ program }: ProgramProps) {
  return (
    <section className="program section-gap">
      <div className="container">
        <div className="program__wrapper">
          <h2 className="program__title title-main">{program.title}</h2>
          <div
            className="program__content rich-text"
            dangerouslySetInnerHTML={{ __html: program.description }}
          />
        </div>
      </div>
    </section>
  );
}
