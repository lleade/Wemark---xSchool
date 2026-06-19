import localFont from "next/font/local";

export const ttHoves = localFont({
  src: [
    {
      path: "../public/fonts/tt-hoves/TT-Hoves-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-hoves/TT-Hoves-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-tt-hoves",
  display: "swap",
});

export const ttFirsNeue = localFont({
  src: [
    {
      path: "../public/fonts/tt-firs-neue/TT-Firs-Neue-Trial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-firs-neue/TT-Firs-Neue-Trial-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-tt-firs-neue",
  display: "swap",
});
