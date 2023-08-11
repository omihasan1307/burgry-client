import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../../assets/banner.png";
import {
  faDroplet,
  faLeaf,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
const Banner = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 my-32 ">
        <div className="grid lg:grid-cols-2 gap-8 items-center ">
          <Slide direction="left" triggerOnce={true}>
            <div className="">
              <img
                className="hover:-translate-y-4 duration-300 hover:duration-300 mx-auto lg:mx-0"
                src={banner}
                alt=""
              />
            </div>
          </Slide>

          <Slide direction="right" triggerOnce={true}>
            <div className="mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white text-center lg:text-left ">
                ENJOY BURGRY MAKE <br /> YOUR TUMMY HAPPY
              </h2>
              <hr className="border-[#FFBA00] mx-auto lg:mx-0 my-5 w-40 border-2 text-center lg:text-left" />
              <p className="lg:text-left text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>
              <div className="grid lg:grid-cols-3 gap-5 my-8  ">
                <div className=" mx-auto lg:mx-0  text-center lg:text-left">
                  <FontAwesomeIcon
                    className="text-4xl text-[#FFBA00]"
                    icon={faUtensils}
                  />
                  <p className="my-5">Delicious</p>
                </div>
                <div className=" mx-auto lg:mx-0  text-center lg:text-left">
                  <FontAwesomeIcon
                    className="text-4xl text-[#FFBA00]"
                    icon={faDroplet}
                  />
                  <p className="my-5">Fresh</p>
                </div>
                <div className=" mx-auto lg:mx-0  text-center lg:text-left">
                  <FontAwesomeIcon
                    className="text-4xl text-[#FFBA00]"
                    icon={faLeaf}
                  />
                  <p className="my-5">Organic</p>
                </div>
                <div className="mx-auto lg:mx-0">
                  <Link to="/menu">
                    <button className="bg-[#FFBA00] w-[200px] mx-auto py-2 text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
