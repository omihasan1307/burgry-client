import offer from "../../assets/offer.jpg";

const Reservation = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center h-[500px] flex items-center text-white reservation"
        style={{ backgroundImage: `url(${offer})` }}
      >
        <div className="  px-2 max-w-screen-xl mx-auto ">
          <h1 className=" text-white font-bold text-4xl">
            GET A SPECIAL OFFER FOR YOUR <br /> SPECIAL OCCASION
          </h1>
          <hr className="border-[#FFBA00] my-8 w-40 border-2 lg:text-left" />

          <p className="text-slate-300 lg:w-3/5 mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <button className="bg-[#FFBA00] px-8 mx-auto py-2  text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
            Book a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
