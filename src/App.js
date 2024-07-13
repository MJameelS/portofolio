import HeroComp from "./Components/HeroComp";
import NavbarComp from "./Components/NavbarComp";
import GalleryComp from "./Components/GalleryComp";
import ServicesComp from "./Components/ServicesComp";
import FaqComp from "./Components/FaqComp";
import FooterComp from "./Components/FooterComp";

function App() {
  return (
    <div>
      <HeroComp />
      <NavbarComp/>
      <GalleryComp/>
      <ServicesComp/>
      <FaqComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
