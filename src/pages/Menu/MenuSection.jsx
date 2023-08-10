import { Link, Outlet } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllItems } from "../../app/features/alItemSlice";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Bounce } from "react-awesome-reveal";
const category = ["food", "snack", "beverage"];

const MenuSection = ({ limit }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const { loading, allItems, error } = useSelector((state) => state.allItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const selectCategory = category[selectIndex];
    dispatch(loadAllItems({ limit, selectCategory }));
  }, [dispatch, limit, selectIndex]);

  return (
    <div className="max-w-screen-xl mx-auto ">
      <Tabs
        selectedIndex={selectIndex}
        onSelect={(index) => setSelectIndex(index)}
      >
        <TabList className="max-w-max flex mx-auto text-white">
          {category.map((e, index) => (
            <Tab
              key={index}
              className="lg:w-40 px-3 lg:px-4 py-2 mx-5 lg:py-4 text-center rounded-lg cursor-pointer uppercase bg-[#171717] duration-500 "
              selectedClassName="bg-[#FFBA00] text-white outline-none duration-500"
            >
              {e}
            </Tab>
          ))}
        </TabList>
        {category.map((e, i) => (
          <TabPanel key={i}>
            {loading && (
              <p className="text-center py-52 text-5xl text-[#FFBA00]">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              </p>
            )}
            <div className="grid gap-3 lg:gap-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-3 my-10">
              {!loading &&
                allItems.map((element) => (
                  <Bounce key={element._id}>
                    <div className=" ">
                      <div className="h-60 grid place-items-center rounded-2xl bg-[#171717] hover:bg-[#FFBA00] duration-300 hover:duration-300">
                        <img
                          className="overflow-hidden w-[90%] h-[90%] object-contain mx-auto py-10 hover:scale-105 duration-300 hover:duration-300"
                          src={element.image}
                          alt=""
                        />
                      </div>
                      <div className="px-2 ">
                        <Link to={`/menuDetails/${element._id}`}>
                          <h2 className="mt-5 mb-2 text-2xl font-bold text-white">
                            {element?.productName?.slice(0, 12)}
                          </h2>
                        </Link>
                        <p className="break-words">
                          {element?.details?.slice(0, 50) + "..."}
                        </p>
                        <h5 className="mt-5 text-[#FFBA00] text-2xl font-bold">
                          ${element.price}
                        </h5>
                      </div>
                    </div>
                  </Bounce>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MenuSection;
