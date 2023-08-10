import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";
import { CUSTOMER } from "../../utilities/constant";
import useTitle from "../../hooks/UseTitle";
import useMyContext from "../../hooks/useMyContext";

const MenuDetails = () => {
  const [item, setItem] = useState({});
  useTitle(`${item?.productName}`);
  const [count, setCount] = useState(1);
  const { user, loading, role } = useMyContext();
  const [instance] = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://burgry-server.vercel.app/itemDetails/${id}`)
      .then((res) => {
        setItem(res?.data);
      })
      .catch((err) => console.log(err));
  }, [id, user?.uid]);

  const handleAddtoCart = (cart) => {
    const { _id, productName, price, image, category } = cart;
    instance
      .post(`/cart?uid=${user?.uid}`, {
        itemID: _id,
        productName,
        price,
        image,
        category,
        uid: user?.uid,
        orderQuantity: count,
      })
      .then(() => {
        refetch();
        navigate(-1);
        enqueueSnackbar(
          `Hi , Your Item has been added into cart Successfully `,
          {
            variant: "success",
          }
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="grid lg:grid-cols-2 gap-10 px-2 place-items-center">
        <div className="w-[95%] ">
          <img
            className="hover:-translate-y-4 duration-300 hover:duration-400"
            src={item?.image}
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold text-white">{item?.productName}</h2>
          <h2 className="text-2xl font-bold text-[#FFBA00] my-3">
            ${item?.price}
          </h2>
          <p className="">{item?.details}</p>
          <h2 className="text-white my-3">
            Category : <span className="text-[#FFBA00]">{item?.category}</span>
          </h2>
          <h2 className="text-white my-2">
            Stock : <span className="text-[#FFBA00]">{item?.quantity}</span>
          </h2>
          <div className="flex items-center ">
            {item?.quantity ? (
              <>
                <div className="text-white me-8 ">
                  Quantity :
                  <button
                    onClick={() => (count > 0 ? setCount(count - 1) : 0)}
                    className="px-4 py-2 mx-2 bg-[#171717] rounded-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 text-center mx-2 bg-[#FFBA00] rounded-lg">
                    {count}
                  </span>
                  <button
                    onClick={() =>
                      count < item?.quantity ? setCount(count + 1) : count
                    }
                    className=" px-4 py-2 mx-2 bg-[#171717] rounded-lg"
                  >
                    +
                  </button>
                </div>
                {role === CUSTOMER && (
                  <button
                    onClick={() => handleAddtoCart(item)}
                    disabled={item?.quantity ? false : true}
                    className="bg-[#FFBA00] animate-pulse  w-[200px] mx-auto py-2 text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 "
                  >
                    <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                    Add to Cart
                  </button>
                )}
                {count === item?.quantity && (
                  <p className="text-red-500 my-5 animate-bounce text-xl">
                    * Stock is not Available{" "}
                  </p>
                )}
              </>
            ) : (
              <p className="text-red-500 my-5 animate-bounce text-xl">
                * Stock is not Available{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
