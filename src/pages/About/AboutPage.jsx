import sign from "../../assets/signature.png";
import burgerAbout from "../../assets/aboutburger.jpg";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <div className="grid lg:grid-cols-2 gap-8 px-2 lg:px-0 place-items-center">
        <div className="w-full h-5/6  ">
          <img className="w-full h-full rounded-xl " src={burgerAbout} alt="" />
        </div>
        <div className=" ">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-left">
            GOOD FOOD FOR YOUR ALL DAY <br /> GOOD MOOD
          </h2>
          <hr className="border-[#FFBA00] my-5 w-40 border-2 text-center lg:text-left" />
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="w-56 mt-8 mb-3">
            <img src={sign} alt="" />
          </div>
          <p className="text-white font-semibold text-xl">Ami Hasan, CEO</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
