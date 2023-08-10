import burgerImg from "../../assets/burgerSection.png";
import snacksImg from "../../assets/snackSection.png";
import drinksImg from "../../assets/drinksSection.png";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";

const ItemSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-0 place-items-center  justify-center">
        <Zoom triggerOnce={true}>
          <div className=" rounded flex items-center h-[150px] w-[400px] bg-[#FFBA00] overflow-hidden">
            <div className="relative w-[220px] -mx-10 ">
              <img
                className="w-full absolute -top-12 -left-4"
                src={burgerImg}
                alt=""
              />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-2xl">FOOD</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button className="my-2 text-black">Buy Online</button>
            </div>
          </div>
        </Zoom>
        <Zoom triggerOnce={true}>
          <div className=" rounded flex items-center h-[150px] w-[400px] bg-[#007936]  overflow-hidden ">
            <div className="relative w-[220px] -mx-10 ">
              <img
                className="w-full absolute -left-5 -top-12"
                src={snacksImg}
                alt=""
              />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-2xl">SNACK</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button className="my-2 text-orange-300">Buy Online</button>
            </div>
          </div>
        </Zoom>
        <Zoom triggerOnce={true}>
          <div className=" rounded flex items-center h-[150px] w-[400px] bg-[#CC3433] overflow-hidden">
            <div className="relative w-[130px] -mx-8  ">
              <img
                className="w-full absolute -left-5 -top-20"
                src={drinksImg}
                alt=""
              />
            </div>
            <div className="ms-10 text-white">
              <h1 className="font-bold text-2xl">BEVERAGE</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button className="my-2 text-orange-300">Buy Online</button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ItemSection;
