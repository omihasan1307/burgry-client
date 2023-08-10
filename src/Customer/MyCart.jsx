import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUserCart from "../hooks/useUserCart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import noCart from "../assets/nocart.png";

const MyCart = () => {
  const [cartItem, refetch, isLoading] = useUserCart();
  const { user } = useMyContext();
  const [instance] = useAxiosSecure();

  const totalValue = cartItem?.reduce(
    (accumulator, item) => {
      const itemTotal = item.orderQuantity * item.price;
      accumulator.totalQuantity += item.orderQuantity;
      accumulator.totalPrice += itemTotal;
      accumulator.totalShipping += itemTotal * 0.05; // 5% shipping cost
      return accumulator;
    },
    { totalQuantity: 0, totalPrice: 0, totalShipping: 0 }
  );

  const handleDelete = (id) => {
    instance
      .delete(`/cartItemDelete/${id}?uid=${user?.uid}`)
      .then((res) => {
        refetch();
        enqueueSnackbar(`Hi , Your Cart Item has been Deleted Successfully `, {
          variant: "success",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-32">
      <div className="grid lg:grid-cols-3 gap-10 px-2 ">
        <div className="lg:col-span-2">
          {cartItem?.length > 0 ? (
            <div>
              {cartItem?.map((e) => (
                <div
                  key={e?._id}
                  className="border mb-3 rounded-lg flex items-center "
                >
                  <div className="w-28 h-24 p-2">
                    <img
                      className="w-full h-full object-contain"
                      src={e?.image}
                      alt=""
                    />
                  </div>
                  <div className=" flex justify-between w-full px-3">
                    <div>
                      <h1 className="text-white mb-1">{e?.productName}</h1>
                      <h1 className="text-white text-sm">
                        Category :{" "}
                        <span className="uppercase text-yellow-400 font-semibold">
                          {e?.category}
                        </span>
                      </h1>
                    </div>
                    <div className=" flex justify-between items-center w-3/6 ">
                      <div className="flex items-center  space-x-2 lg:space-x-5">
                        <h1 className="text-yellow-500 text-xl">${e?.price}</h1>
                        <h1 className="text-white">
                          {" "}
                          Quantity : {e?.orderQuantity}
                        </h1>
                      </div>
                      <button
                        onClick={() => handleDelete(e?._id)}
                        className="px-4 py-2  rounded-full bg-[#171717] hover:bg-red-600 text-red-500 hover:text-white"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <img
                className="mx-auto hover:-translate-y-4 duration-300 hover:duration-300"
                src={noCart}
                alt=""
              />
            </>
          )}
        </div>
        <div className="lg:col-span-1 ">
          <div className="border rounded p-5">
            <h1 className="text-center text-yellow-500 text-2xl font-bold">
              Order Summary
            </h1>
            <hr className="border-[#FFBA00] my-5 mx-10" />
            <div className="flex justify-between">
              <div className="text-white space-y-2">
                <p>Item's ({totalValue?.totalQuantity}) SubTotal </p>
                <p>Shipping</p>
                <p>Amount Payable</p>
              </div>
              <div className="space-y-2 text-yellow-500">
                <p>{totalValue?.totalPrice} Tk </p>
                <p>{totalValue?.totalShipping} Tk</p>
                <p>{totalValue?.totalShipping + totalValue?.totalPrice} Tk</p>
              </div>
            </div>
            <Link to="/customerDashboard/shippingInfo">
              <button className="bg-[#FFBA00] mt-5 w-full uppercase mx-auto py-2 text-white rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
                Process to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
