import gif from "../assets/spinning-burger.gif";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useMyContext from "../hooks/useMyContext";
import { enqueueSnackbar } from "notistack";
import useAdminOrder from "../hooks/useAdminOrder";

const ManageOrders = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();

  const [allOrders, refetch, isLoading] = useAdminOrder();

  console.log(allOrders);

  const handleUpdate = (id) => {
    console.log(id);
    instance.patch(`/orderUpdate/${id}?uid=${user?.uid}`).then(() => {
      refetch();
      enqueueSnackbar(
        `Hi , Your order details has been Updated Successfully `,
        {
          variant: "success",
        }
      );
    });
  };

  const handleDelete = (id) => {
    instance.delete(`/orderDelete/${id}?uid=${user?.uid}`).then(() => {
      refetch();
      enqueueSnackbar(
        `Hi , Your order details has been Deleted Successfully `,
        {
          variant: "success",
        }
      );
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-32 ">
      {isLoading ? (
        <div className="w-52 h-52  mx-auto">
          <img className="w-full h-full " src={gif} alt="" />
        </div>
      ) : (
        <>
          <h2 className="text-3xl text-yellow-500">
            Total Order List : {allOrders?.length}
          </h2>
          {allOrders?.map((e) => (
            <div key={e?._id}>
              <div className=" bg-[#171717] px-2 my-5 py-5">
                <div>
                  <h2 className="text-xl text-white">Transaction details</h2>
                  <div className="my-5 flex items-center justify-between ">
                    <div>
                      {" "}
                      <h2 className="text-xl text-white font-bold">
                        {e?.fullName}
                      </h2>
                      <h2 className="text-sm ">{e?.email}</h2>
                    </div>
                    <div className="text-end pe-5">
                      <p className="text-white text-sm ">Gross amount</p>
                      <p className="text-white text-2xl">
                        {e?.totalPrice}/- Tk{" "}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className=" text-white">
                      Payment status: {e?.paymentStatus ? "Paid" : "Unpaid"}
                    </h1>
                    <h1 className=" text-sm">{e?.orderTime}</h1>
                    <h1 className=" text-sm"> Transaction ID:{e?.transId}</h1>
                    <h1 className=" text-sm"> Phone No:{e?.number}</h1>
                    <h1 className=" text-sm"> Delivery address:{e?.number}</h1>
                  </div>
                </div>
                <div className="overflow-x-auto my-5  bg-black">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order Details </th>
                        <th className="text-right">Category</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      {e?.cartItem.map((item) => (
                        <tr key={item?._id}>
                          <th>{item?.productName}</th>
                          <th className="text-right">{item?.category}</th>
                          <th className="text-right">{item?.orderQuantity}</th>
                          <th className="text-right">{item?.price}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {e?.status || (
                  <div className="space-x-5">
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="px-4 py-2 bg-red-800 rounded text-white "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdate(e._id)}
                      className="px-4 py-2 bg-green-800 rounded text-white "
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ManageOrders;
