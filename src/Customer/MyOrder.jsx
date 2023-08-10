import useOrderCollecionForUser from "../hooks/UseOrderCollecionForUser";
import gif from "../assets/spinning-burger.gif";
import noImage from "../assets/noProfile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHourglassEnd,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";

const MyOrder = () => {
  const [order, refetch, isLoading] = useOrderCollecionForUser();
  console.log(order);
  const { user } = useMyContext();
  const [instance] = useAxiosSecure();
  const handleDelete = (id) => {
    instance
      .delete(`/userOrderItem/${id}?uid=${user?.uid}`)
      .then(() => {
        refetch();
        enqueueSnackbar(`Hi , Your Item has been Deleted Successfully `, {
          variant: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-20 mb-32">
        <div>
          {isLoading ? (
            <div className="w-52 h-52  mx-auto">
              <img className="w-full h-full " src={gif} alt="" />
            </div>
          ) : (
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="text-white">
                      <th>Order Date </th>
                      <th>Address</th>
                      <th>Phone </th>
                      <th>price</th>
                      <th>Transaction ID</th>
                      <th>Order Item</th>
                      <th>Status </th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.map((e) => (
                      <tr key={e.userUID}>
                        <td className="text-yellow-400">{e?.orderTime}</td>
                        <td className="text-yellow-400">{e?.address}</td>
                        <td className="text-yellow-400"> {e?.number}</td>
                        <td className="text-yellow-400">{e?.totalPrice} Tk</td>
                        <td className="text-yellow-400">{e?.transId}</td>
                        <th className="text-yellow-400">
                          {e?.cartItem.map((cart) => (
                            <div key={cart._id}>
                              <p>{cart?.productName}</p>
                              <p>{cart?.price}Tk</p>
                              <p>QTY: {cart?.orderQuantity}</p>
                              <hr className="border-slate-800 my-2" />
                            </div>
                          ))}
                        </th>
                        <td className="text-yellow-400 space-y-2">
                          <p>
                            {e?.paymentStatus ? (
                              <span className="text-green-400 ">
                                Payment Success
                              </span>
                            ) : (
                              <span>Pending Payment</span>
                            )}
                          </p>
                          <p>
                            {e?.status ? (
                              <span className="text-green-400 ">
                                Order Success
                              </span>
                            ) : (
                              <span>Pending Order</span>
                            )}
                          </p>
                        </td>
                        <td>
                          <button className="px-4 py-2  rounded-full bg-[#171717] hover:bg-red-600 text-red-500 hover:text-white">
                            {e?.paymentStatus ? (
                              <>
                                {e?.status ? (
                                  <FontAwesomeIcon icon={faCircleCheck} />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faHourglassEnd}
                                    className="animate-spin text-yellow-400"
                                  />
                                )}
                              </>
                            ) : (
                              <FontAwesomeIcon
                                onClick={() => handleDelete(e._id)}
                                icon={faTrash}
                              />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
