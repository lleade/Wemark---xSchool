import About from "@/components/About";
import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Program from "@/components/Program";
import { getXSchoolData } from "@/lib/api";
import { formatMultilineText } from "@/lib/utils";

export default async function Home() {
  const data = await getXSchoolData();
  const founder = data.founders[0];
  const program = data.programs[0];

  return (
    <>
      <div 
        className="hero"
        style={{
          backgroundImage: `url('${data.banner_image}')`,
          overflow: 'hidden',
        }}
      >
        <Header />
        <Banner title={data.banner_title} />
      </div>
      <main className="page">
        <About
          title={data.about_title}
          description={data.about_description}
          images={data.about_images}
        />
        {founder ? <Founder founder={founder} /> : null}
        {program ? <Program program={program} /> : null}
        <Marquee textSlider={data.text_slider} />
        <FAQ
          title={formatMultilineText(data.faq_title)}
          items={data.xschool_faq}
        />
      </main>
      <Footer />
    </>
  );
}
