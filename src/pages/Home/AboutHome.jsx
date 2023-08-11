import { faCheck } from "@fortawesome/free-solid-svg-icons";
import burgerAbout from "../../assets/aboutburger.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const AboutHome = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="grid lg:grid-cols-2 gap-8 px-5 lg:px-0 place-items-center">
        <Slide triggerOnce={true}>
          <div className="w-full h-5/6  ">
            <img
              className="w-full h-full rounded-xl "
              src={burgerAbout}
              alt=""
            />
          </div>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-left">
              FIND YOUR BEST TASTED FOOD & <br /> DRINK JUST IN ONE PLACE
            </h2>
            <hr className="border-[#FFBA00] my-5 w-40 border-2 text-center lg:text-left" />
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>

            <div className="grid lg:grid-cols-2 lg:gap-10 mb-4">
              <div>
                <div className="flex  items-center mb-3">
                  <FontAwesomeIcon className="text-yellow-500" icon={faCheck} />
                  <p className="ms-5">Best Price</p>
                </div>
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon className="text-yellow-500" icon={faCheck} />
                  <p className="ms-5">Fresh Ingredient</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex  items-center mb-3">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faCheck}
                    />
                    <p className="ms-5">Best Service</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faCheck}
                    />
                    <p className="ms-5">Health Protocol</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about">
              <button className="bg-[#FFBA00] px-8 mx-auto py-2 text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
                About Us
              </button>
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AboutHome;
