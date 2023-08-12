import burgerImg from "../../assets/burgerSection.png";
import snacksImg from "../../assets/snackSection.png";
import drinksImg from "../../assets/drinksSection.png";
import { Zoom } from "react-awesome-reveal";

const ItemSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 ">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-5 px-3 lg:px-0">
        <Zoom triggerOnce={true}>
          <div className="col-span-1 flex items-center bg-[#FFBA00] rounded-lg">
            <div className="w-32 h-32  relative overflow-hidden ">
              <img
                className="absolute -bottom-6 -left-5  w-full h-full object-cover"
                src={burgerImg}
                alt=""
              />
            </div>
            <div className="text-white flex items-center">
              <div>
                <h1 className="font-bold text-2xl">FOOD</h1>
                <p>Lorem ipsum dolor sit.</p>
                <button className="my-2 text-black">Buy Online</button>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom triggerOnce={true}>
          <div className="col-span-1 flex items-center bg-[#007936] rounded-lg">
            <div className="w-32 h-32  relative overflow-hidden ">
              <img
                className="absolute -bottom-6 -left-5  w-full h-full object-cover"
                src={snacksImg}
                alt=""
              />
            </div>
            <div className="text-white flex items-center ">
              <div>
                <h1 className="font-bold text-2xl">SNACK</h1>
                <p>Lorem ipsum dolor sit.</p>
                <button className="my-2 text-orange-300">Buy Online</button>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom triggerOnce={true}>
          <div className="col-span-1 flex items-center bg-[#CC3433] rounded-lg">
            <div className="w-32 h-32  relative overflow-hidden ">
              <img
                className="absolute -bottom-6 -left-8 w-full h-full object-cover "
                src={drinksImg}
                alt=""
              />
            </div>
            <div className="text-white flex items-center">
              <div>
                <h1 className="font-bold text-2xl">BEVERAGE</h1>
                <p>Lorem ipsum dolor sit.</p>
                <button className="my-2 text-orange-300">Buy Online</button>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ItemSection;
