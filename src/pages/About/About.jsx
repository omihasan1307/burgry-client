import useTitle from "../../hooks/UseTitle";
import TitleSection from "../../shared/TitleSection";
import UpdateSection from "../Home/UpdateSection";
import AboutChef from "./AboutChef";
import AboutExperience from "./AboutExperience";
import AboutPage from "./AboutPage";

const About = () => {
  useTitle("ABOUT");
  return (
    <div>
      <div className="my-32">
        <TitleSection
          title="ABOUT US
        "
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
        />
      </div>
      <AboutPage />
      <AboutExperience />
      <AboutChef />
      <UpdateSection />
    </div>
  );
};

export default About;
