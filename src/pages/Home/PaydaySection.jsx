import { Slide } from "react-awesome-reveal";
import payday1 from "../../assets/payday1.png";
import payday2 from "../../assets/payday2.png";
const PaydaySection = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mx-3 lg:mx-2 ">
        <Slide direction="left" triggerOnce={true}>
          <div className="lg:flex items-center justify-between rounded-2xl px-4 py-5 bg-[#171717] lg:h-[16.25rem]">
            <div className="order-2 lg:order-1 ">
              <p className="text-[#FFBA00]">Payday promo</p>
              <h2 className="text-white text-2xl font-bold">
                GET A 10% DISCOUNT ON <br /> PAYDAY WEEK
              </h2>
              <p className="my-2">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <button className="my-2 text-yellow-500">Buy Online</button>
            </div>
            <div className=" w-[15rem] lg:w-[12.5rem] order-1 lg:order-2 mx-auto">
              <img
                className="hover:-translate-y-2 duration-300 hover:duration-300 "
                src={payday1}
                alt=""
              />
            </div>
          </div>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <div className="lg:flex items-center justify-between rounded-2xl px-4 py-5 bg-[#171717] lg:h-[16.25rem]">
            <div className="order-last lg:order-first">
              <p className="text-[#FFBA00]">Payday promo</p>
              <h2 className="text-white text-2xl font-bold">
                BUY 1 COKE GET MORE <br /> FREE 1 COKE
              </h2>
              <p className="my-2">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <button className="my-2 text-yellow-500">Buy Online</button>
            </div>
            <div className="w-[15.5rem] lg:w-[12.5rem] order-first lg:order-last mx-auto">
              <img
                className="hover:-translate-y-2 duration-300 hover:duration-300 "
                src={payday2}
                alt=""
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PaydaySection;
