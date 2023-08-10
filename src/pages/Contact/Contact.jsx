import useTitle from "../../hooks/UseTitle";
import TitleSection from "../../shared/TitleSection";
import UpdateSection from "../Home/UpdateSection";
import MapContact from "./MapContact";
import Message from "./Message";

const Contact = () => {
  useTitle("CONTACT");
  return (
    <div className="px-2">
      <div className="my-32">
        <TitleSection
          title="CONTACT US
"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
        />
      </div>
      <Message />
      <MapContact />
      <UpdateSection />
    </div>
  );
};

export default Contact;
