import TitleSection from "../../shared/TitleSection";
import img1 from "../../assets/chef1.jpeg";
import img2 from "../../assets/chef2.jpeg";
import img3 from "../../assets/chef3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const AboutChef = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 px-2">
      <TitleSection
        title="OUR BEST CHEF"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
      />
      <div className="my-10 grid lg:grid-cols-3 gap-10">
        <div className="relative photoGallery ">
          <div>
            <img className="rounded-lg chefimg" src={img1} alt="" />
          </div>
          <div>
            <div className="photoText absolute top-0 w-full h-full flex justify-between">
              <h1 className="text-white mt-auto px-5 py-5 text-xl font-bold">
                GEORGE SHAW
              </h1>
              <div className="flex flex-col items-center justify-between py-5">
                <h1 className="text-white -rotate-90 py-8">Food Chef</h1>
                <div>
                  <div className="mx-auto flex flex-col">
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px]  "
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faInstagram}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faYoutube}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative photoGallery ">
          <div>
            <img className="rounded-lg chefimg" src={img2} alt="" />
          </div>
          <div>
            <div className="photoText absolute top-0 w-full h-full flex justify-between">
              <h1 className="text-white mt-auto px-5 py-5 text-xl font-bold">
                CALLUM ROSE
              </h1>
              <div className="flex flex-col items-center justify-between py-5">
                <h1 className="text-white -rotate-90 py-8">Food Chef</h1>
                <div>
                  <div className="mx-auto flex flex-col">
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px]  "
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faInstagram}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faYoutube}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative photoGallery ">
          <div>
            <img className="rounded-lg chefimg" src={img3} alt="" />
          </div>
          <div>
            <div className="photoText absolute top-0 w-full h-full flex justify-between">
              <h1 className="text-white mt-auto px-5 py-5 text-xl font-bold">
                TINE BAUER
              </h1>
              <div className="flex flex-col items-center justify-between py-5">
                <h1 className="text-white -rotate-90 py-8">Food Chef</h1>
                <div>
                  <div className="mx-auto flex flex-col">
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px]  "
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faInstagram}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500 w-[25px] h-[50px] "
                      icon={faYoutube}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChef;
