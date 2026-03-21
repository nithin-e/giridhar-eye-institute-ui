import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import ContactTicker from './ContactTicker.jsx';
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
import InPatientServices from "./InPatientServices.jsx";
import OcularTraumaClinic from "./OcularTraumaClinic.jsx";
import OutPatientServices from "./OutPatientServices.jsx";
import OrthopticEvaluation from "./OrthopticEvaluation.jsx";
import PrecisionScanningImagingSystems from "./PrecisionScanningImagingSystems.jsx";
import DoctorsInKochi from "./DoctorsInKochi.jsx";


export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/services/in-patient-services") {
    return (
      <>
        <Navbar />
        <InPatientServices />
        <Footer />
      </>
    );
  }

  if (path === "/services/ocular-trauma-clinic") {
    return (
      <>
        <Navbar />
        <OcularTraumaClinic />
        <Footer />
      </>
    );
  }

  if (path === "/services/out-patient-services") {
    return (
      <>
        <Navbar />
        <OutPatientServices />
        <Footer />
      </>
    );
  }

  if (path === "/services/orthoptic-evaluation") {
    return (
      <>
        <Navbar />
        <OrthopticEvaluation />
        <Footer />
      </>
    );
  }

  if (path === "/services/precision-scanning-imaging-systems") {
    return (
      <>
        <Navbar />
        <PrecisionScanningImagingSystems />
        <Footer />
      </>
    );
  }

  if (path === "/eye-doctors-in-kochi") {
    return (
      <>
        <Navbar />
        <DoctorsInKochi />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
       <HeroSection />
      <ContactTicker />
      <AboutSection /> 
      
      <Specialities />
     
      <OurServices />
      <SpecialClinicsSection />
      <MeetOurDoctors />
      <DiscoverYouTube />
      <VisionMatters />
      <UpcomingEvents />
      <Footer />
    </>
  );
}

