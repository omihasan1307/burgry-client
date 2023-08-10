import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateSection = () => {
  return (
    <div className="bg-[#FFBA00] text-black  px-2">
      <div className="grid lg:grid-cols-2 py-24  max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold">
            GET EXCLUSIVE UPDATE
          </h2>
          <p className="text-white my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-3">
          <div className="col-span-2 my-5 lg:my-0">
            <input
              className="bg-white text-black px-8 py-4 rounded-lg w-full "
              type="text"
              placeholder="Email"
              id=""
            />
          </div>
          <div className="col-span-1">
            <div className="bg-black text-white px-4 py-4 rounded-lg  flex items-center ">
              <FontAwesomeIcon icon={faPaperPlane} />
              <button className=" w-full">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;
