import {
  faBurger,
  faHouseChimney,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutExperience = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 px-2">
      <div className="grid lg:grid-cols-3 gap-10 ">
        <div className="bg-[#171717] text-white flex flex-col items-center py-10 rounded-2xl">
          <div className="text-yellow-500 text-5xl mb-3">
            <FontAwesomeIcon icon={faShield} />
          </div>

          <div className="mb-3 relative ">
            <h1 className=" text-3xl font-bold">15</h1>
            <h1 className="absolute bottom-3 left-10 text-4xl text-yellow-400">
              +
            </h1>
          </div>
          <h1>Year Experience</h1>
        </div>
        <div className="bg-[#171717] text-white flex flex-col items-center py-10 rounded-2xl">
          <div className="text-yellow-500 text-5xl mb-3">
            <FontAwesomeIcon icon={faBurger} />
          </div>

          <div className="mb-3 relative ">
            <h1 className=" text-3xl font-bold">90</h1>
            <h1 className="absolute bottom-3 left-10 text-4xl text-yellow-400">
              +
            </h1>
          </div>
          <h1>Menu Variant</h1>
        </div>
        <div className="bg-[#171717] text-white flex flex-col items-center py-10 rounded-2xl">
          <div className="text-yellow-500 text-5xl mb-3">
            <FontAwesomeIcon icon={faHouseChimney} />
          </div>

          <div className="mb-3 relative ">
            <h1 className=" text-3xl font-bold">24</h1>
            <h1 className="absolute bottom-3 left-10 text-4xl text-yellow-400">
              +
            </h1>
          </div>
          <h1>Restaurant Branch</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutExperience;
