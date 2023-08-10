import useManageItemsForAdmin from "../hooks/useManageItemsForAdmin";
import gif from "../assets/spinning-burger.gif";
import noImage from "../assets/noProfile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useMyContext from "../hooks/useMyContext";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [items, refetch, isLoading] = useManageItemsForAdmin();
  const { user } = useMyContext();
  const [instance] = useAxiosSecure();

  const handleDelete = (data) => {
    instance
      .delete(`/item/${data._id}?uid=${user?.uid}`)
      .then(() => {
        refetch();
        enqueueSnackbar(`Hi , Your Item has been Deleted Successfully `, {
          variant: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-32 ">
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
                    <th>Photo </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((e, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              {e?.image ? (
                                <img src={e?.image} alt="No IMAGE" />
                              ) : (
                                <img src={noImage} alt="No IMAGE" />
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-yellow-400">{e?.productName}</td>
                      <td className="text-yellow-400">${e?.price}</td>
                      <td className="text-yellow-400">{e?.quantity}</td>
                      <td className="text-yellow-400">{e?.category}</td>
                      <th>
                        <Link to={`/adminDashboard/update/${e?._id}`}>
                          <button className="px-4 py-2  rounded-full bg-[#171717] hover:bg-yellow-600 text-yellow-500 hover:text-white me-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(e)}
                          className="px-4 py-2  rounded-full bg-[#171717] hover:bg-red-600 text-red-500 hover:text-white"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
