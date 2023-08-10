import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 ">
      <footer className="footer px-2 py-8  bg-black text-white ">
        <div className="">
          <p className=" text-5xl font-bold">
            BURG<span className="text-[#FFBA00]">LYF</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
            elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
        </div>
        <div>
          <span className="font-bold text-xl text-white">SUPPORT</span>
          <a className="hover:text-yellow-500">FAQ's</a>
          <a className="hover:text-yellow-500">Privacy Policy</a>
          <a className="hover:text-yellow-500">Term & Conditions </a>
          <a className="hover:text-yellow-500">Contact</a>
        </div>
        <div>
          <span className="font-bold text-xl text-white">PHONE</span>
          <a className="hover:text-yellow-500">
            <FontAwesomeIcon className="text-yellow-500 me-3" icon={faPhone} />
            +001862 404050
          </a>
          <span className="font-bold text-xl text-white mt-4">EMAIL</span>
          <a className="hover:text-yellow-500">
            <FontAwesomeIcon
              className="text-yellow-500 me-3"
              icon={faEnvelope}
            />
            omihasan@gmail.com
          </a>
        </div>
        <div>
          <span className="font-bold text-xl text-white">ADDRESS</span>

          <a className="hover:text-yellow-500">
            <FontAwesomeIcon
              className="text-yellow-500 me-3"
              icon={faLocationDot}
            />
            Chasara, Narayanganj, Bangladesh.
          </a>
          <span className="font-bold text-xl text-white mt-4">FOLLOW US</span>
          <a className="hover:text-yellow-500">
            <FontAwesomeIcon
              className="text-yellow-500 me-5 "
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="text-yellow-500 me-5 "
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-yellow-500 me-5 "
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="text-yellow-500 me-5 "
              icon={faGithub}
            />
          </a>
        </div>
      </footer>
      <hr className="border-gray-800 mx-2 " />
      <footer className="footer px-2  py-4 bg-black text-white">
        <div className="items-center grid-flow-col">
          <p>Burger Website by Ami hasan</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Copyright © 2021. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
