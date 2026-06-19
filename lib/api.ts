const API_URL = "https://admin.wemark.pro/api/tasks-xschool/";

export interface AboutImage {
  image: string;
}

export interface Founder {
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
  linkedin_url: string;
  instagram_url: string;
}

export interface Program {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TextSlider {
  xline1: string;
  xline2: string;
  xline3: string;
}

export interface XSchoolData {
  banner_title: string;
  banner_image: string;
  about_title: string;
  about_description: string;
  about_images: AboutImage[];
  founders: Founder[];
  programs: Program[];
  faq_title: string;
  xschool_faq: FaqItem[];
  text_slider: TextSlider;
}

export async function getXSchoolData(): Promise<XSchoolData> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch xSchool data: ${response.status}`);
  }

  return response.json();
}
