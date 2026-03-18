import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './AboutSection.jsx';
import GiridharEyeInstitute from './GiridharEyeInstitute.jsx';
import Specialities from './Specialities.jsx';
import SpecialClinics from './SpecialClinics.jsx';
import SpecialClinicsOverview from './SpecialitiesOverview.jsx';
import OurServices from './OurServices.jsx';
import MeetOurDoctors from "./MeetOurDoctors.jsx";
import DiscoverYouTube from "./DiscoverYouTube.jsx";
import VisionMatters from "./VisionMatters.jsx";
import UpcomingEvents from "./UpcomingEvents.jsx";
import Footer from "./Footer.jsx";
import SpecialClinicsSection from "./SpecialClinicsSection.jsx";
import CursorFX from "./animation/CursorFX.jsx";


export default function App() {
  return (
    <>
      <Navbar />
       <HeroSection />
      <AboutSection /> 
      {/* <GiridharEyeInstitute /> */}
      <Specialities />
      {/* <SpecialClinicsOverview/> */}
      <OurServices />
      <SpecialClinicsSection />
      <MeetOurDoctors />
      <DiscoverYouTube />
      <VisionMatters />
      <UpcomingEvents />
      <Footer />
      <CursorFX />
    </>
  );
}

