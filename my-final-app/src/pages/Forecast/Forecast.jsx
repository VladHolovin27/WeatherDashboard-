import { useRef } from "react";
import { EightDayForeCastSection } from "../../components/EightDaysForecastSection/EightDayForecastSection";
import ForecastCharacteristics from "../../components/ForecastCharacteristics/ForecastCharacteristics";
import BeautifulNature from "../../components/HomeSources/BeautifulNature/BeautifulNature";
import FooterHome from "../../components/HomeSources/FooterHome/FooterHome";
import HeaderHome from "../../components/HomeSources/HeaderHome/HeaderHome";
import InteractionCards from "../../components/HomeSources/InteractionCards/InteractionCards";
import MainHome from "../../components/HomeSources/MainHome/MainHome";
import { HourlyForeCastSection } from "../../components/HourlyForecastSection/HourlyForecstSection";

function Forecast() {
    const hourlyRef = useRef(null);
    const seeMoreRef = useRef(null);

  const scrollToHourly = () => {
    hourlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMore = () => {
    seeMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

     return (
    <div>
      <HeaderHome />
      <MainHome onHourForeCast={scrollToHourly} onSeeMore={scrollToMore} />
      <div ref={seeMoreRef}>
        <ForecastCharacteristics />
      </div>
      <div ref={hourlyRef}>
        <HourlyForeCastSection />
      </div>
      <EightDayForeCastSection />
      <InteractionCards />
      <BeautifulNature />
      <FooterHome />
    </div>
  );
}

export default Forecast;