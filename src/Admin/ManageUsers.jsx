import useManageUsers from "../hooks/useManageUsers";
import gif from "../assets/spinning-burger.gif";
import noImage from "../assets/noProfile.webp";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";
import useMyContext from "../hooks/useMyContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageUsers = () => {
  const [instance] = useAxiosSecure();
  const { user } = useMyContext();
  const [manageUsers, refetch, isLoading] = useManageUsers();

  const handleClick = (data) => {
    instance
      .delete(`/users/${data._id}?uid=${user?.uid}&fid=${data.userUID}`)
      .then(() => {
        refetch();
        enqueueSnackbar(`Hi , Your customer has been Deleted Successfully `, {
          variant: "success",
        });
      });
  };

  return (
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
                    <th>Photo </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {manageUsers?.map((e) => (
                    <tr key={e.userUID}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              {e?.photoURL ? (
                                <img src={e?.photoURL} alt="No AGE" />
                              ) : (
                                <img src={noImage} alt="No IMAGE" />
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-yellow-400">{e?.userName}</td>
                      <td className="text-yellow-400">{e?.userEmail}</td>
                      <td className="text-yellow-400">{e?.role}</td>
                      <th>
                        <button
                          onClick={() => handleClick(e)}
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

export default ManageUsers;
