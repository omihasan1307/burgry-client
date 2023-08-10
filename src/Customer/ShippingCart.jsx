import { Link } from "react-router-dom";
import useUserCart from "../hooks/useUserCart";
import { useReducer } from "react";
import { INPUT } from "../utilities/constant";
import { enqueueSnackbar } from "notistack";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useMyContext from "../hooks/useMyContext";

const ShippingCart = () => {
  const [cartItem, refetch, isLoading] = useUserCart();
  const [instance] = useAxiosSecure();
  const { user } = useMyContext();
  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

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

  const initialState = {
    fullName: "",
    email: "",
    number: "",
    address: "",
    postCode: "",
    city: "",
  };
  const shippingReducer = (state, action) => {
    switch (action.type) {
      case INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(shippingReducer, initialState);
  const handleCreatePaymentIntent = () => {
    const { fullName, email, number, address, postCode, city } = state;
    if (fullName && email && number && address && postCode && city) {
      instance
        .post(`/createPaymentIntent?uid=${user?.uid}`, {
          userId: user.uid,
          ...state,
          cartItem,
          totalPrice: totalValue?.totalShipping + totalValue?.totalPrice,
          orderTime: formattedDate,
        })
        .then((res) => {
          console.log(res.data);
          window.location.replace(res.data.url);
        });
    } else {
      enqueueSnackbar(`Hi , Your Shipping Information is Empty  `, {
        variant: "error",
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-32 px-2">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-[#FFBA00] text-xl font-bold mb-5 uppercase">
            Shipping Details
          </h1>
          <div className="mb-5">
            <h1 className="text-white mb-2">Full Name*</h1>
            <input
              onChange={(e) =>
                dispatch({
                  type: INPUT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="fullName"
              type="text"
              className="px-4 py-2 w-full bg-[#171717]  "
            />
          </div>
          <div className="mb-5">
            <h1 className="text-white mb-2">Email*</h1>
            <input
              name="email"
              onChange={(e) =>
                dispatch({
                  type: INPUT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="email"
              className="px-4 py-2 w-full bg-[#171717]  "
            />
          </div>
          <div className="mb-5">
            <h1 className="text-white mb-2">Phone Number*</h1>
            <input
              name="number"
              onChange={(e) =>
                dispatch({
                  type: INPUT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="number"
              className="px-4 py-2 w-full bg-[#171717]  "
            />
          </div>
          <div className="mb-5">
            <h1 className="text-white mb-2">Address *</h1>
            <input
              name="address"
              onChange={(e) =>
                dispatch({
                  type: INPUT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
              className="px-4 py-2 w-full bg-[#171717]  "
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <h1 className="text-white mb-2">Postcode/Zip*</h1>
              <input
                name="postCode"
                onChange={(e) =>
                  dispatch({
                    type: INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="text"
                className="px-4 py-2 w-full bg-[#171717]  "
              />
            </div>
            <div className="mb-5">
              <h1 className="text-white mb-2">Town/City*</h1>
              <input
                name="city"
                onChange={(e) =>
                  dispatch({
                    type: INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="text"
                className="px-4 py-2 w-full bg-[#171717]  "
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-[#FFBA00] text-xl font-bold mb-5 uppercase">
            your order
          </h1>
          <div>
            {cartItem?.map((e) => (
              <div key={e?._id}>
                <div className="mb-5 flex items-center">
                  <div className="w-24 h-24 bg-[#171717] p-2 flex rounded-lg">
                    <img
                      className="w-full h-hull object-contain"
                      src={e?.image}
                      alt=""
                    />
                  </div>
                  <div className="ms-5 space-y-1">
                    <h1 className="text-[#FFBA00]">{e?.productName}</h1>
                    <h1 className="text-white text-sm">{e?.price} Tk</h1>
                    <h1 className="text-white text-sm">
                      QTY:{e?.orderQuantity}
                    </h1>
                  </div>
                  <hr />
                </div>
                <hr className="border-[#FFBA00] my-5" />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-10  px-4 py-4 rounded-lg bg-[#171717]">
            <div className="text-white space-y-2">
              <p>Order places</p>
              <p>Item's ({totalValue?.totalQuantity}) SubTotal </p>
              <p>Shipping</p>
              <p>Amount Payable</p>
            </div>
            <div className="space-y-2 text-yellow-500">
              <p>{formattedDate} </p>
              <p>{totalValue?.totalPrice} Tk </p>
              <p>{totalValue?.totalShipping} Tk</p>
              <p>{totalValue?.totalShipping + totalValue?.totalPrice} Tk</p>
            </div>
          </div>

          <button
            onClick={handleCreatePaymentIntent}
            className="bg-[#FFBA00] mt-5 w-full uppercase mx-auto py-2 text-white rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingCart;
