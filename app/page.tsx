import Header from "./components/header";
import Hero from "./components/hero";
import Banner from "./components/banner";
import Apps from "./components/apps";
import About from "./components/about";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner
        message="Yeni uygulamamız yolda! Takipte kalmak için bizi sosyal medya hesaplarımızdan takip edin."
        ctaText="Takip Et"
        ctaHref="https://instagram.com/tahinkreb"
      />
      <Hero></Hero>
      {/* <Apps></Apps> */}
    <About></About>
    <Newsletter></Newsletter>
    </>
  );
}
