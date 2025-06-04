import BeautifulNature from "../../components/HomeSources/BeautifulNature/BeautifulNature";
import FooterHome from "../../components/HomeSources/FooterHome/FooterHome";
import HeaderHome from "../../components/HomeSources/HeaderHome/HeaderHome";
import InteractionCards from "../../components/HomeSources/InteractionCards/InteractionCards";
import MainHome from "../../components/HomeSources/MainHome/MainHome";
function Home () {
    return (
        <section>
          <HeaderHome />
          <MainHome />
          <InteractionCards />
          <BeautifulNature />
          <FooterHome />
        </section>
      );
      
}

export default Home;