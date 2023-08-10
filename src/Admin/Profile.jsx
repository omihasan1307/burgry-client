import { faRightFromBracket, faXmark } from "@fortawesome/free-solid-svg-icons";
import useMyContext from "../hooks/useMyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import noImage from "../assets/noProfile.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSingleUser from "../hooks/useSingleUser";
import gif from "../assets/spinning-burger.gif";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";

const Profile = () => {
  const { user, logOut } = useMyContext();
  const [singleUser, refetch, isLoading] = useSingleUser();
  const { userName, photoURL, address } = !isLoading && singleUser;
  const [instance] = useAxiosSecure();
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState(userName);
  const [userAddress, setUserAddress] = useState(address);
  const [img, setimg] = useState(photoURL);
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (name && address && img) {
      instance
        .patch(`/users/${singleUser?._id}?uid=${user?.uid}`, {
          userName: name,
          photoURL: img,
          address: userAddress,
        })
        .then(() => {
          refetch();
          setUpdate(false);
          enqueueSnackbar(`Hi , Your Profile has been updated Successfully `, {
            variant: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      enqueueSnackbar(`Hi , Empty field can not be submited `, {
        variant: "error",
      });
    }
  };

  const handleCancel = () => {
    setUpdate(false);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-32 ">
      <div>
        {isLoading ? (
          <div className="w-52 h-52  mx-auto">
            <img className="w-full h-full " src={gif} />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 text-white lg:place-items-center px-2 ">
            <div className="">
              {update && (
                <div className="">
                  <p className="text-yellow-500 mb-1">Photo Url:</p>
                  <input
                    placeholder="Photo URL"
                    defaultValue={photoURL}
                    onChange={(e) => setimg(e.target.value)}
                    type="text"
                    className="px-4 py-2 rounded bg-[#171717] w-full  "
                  />
                </div>
              )}

              {!update && (
                <div className="avatar  mx-auto grid place-items-center ">
                  <div className="w-64 rounded-full border-8 border-yellow-400 mx-auto">
                    {photoURL ? <img src={photoURL} /> : <img src={noImage} />}
                  </div>
                </div>
              )}
            </div>
            <div className="my-10 lg:my-0  w-full">
              <div>
                <p className="text-yellow-500 mb-1">Name:</p>
                {update ? (
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="px-4 py-2 rounded bg-[#171717] w-full lg:w-1/2"
                    defaultValue={userName}
                  />
                ) : (
                  <h2 className="text-xl font-bold">{userName}</h2>
                )}
              </div>
              <div className="mt-5">
                <p className="text-yellow-500 mb-1">Email:</p>
                {update ? (
                  <input
                    type="text"
                    className="px-4 py-2 rounded bg-[#171717] w-full lg:w-1/2"
                    defaultValue={singleUser?.userEmail}
                    readOnly
                  />
                ) : (
                  <h2 className="text-xl font-bold">{singleUser?.userEmail}</h2>
                )}
              </div>
              <div className="mt-5">
                <p className="text-yellow-500 mb-1">Address:</p>

                {update ? (
                  <input
                    onChange={(e) => setUserAddress(e.target.value)}
                    type="text"
                    defaultValue={address}
                    className="px-4 py-2 rounded bg-[#171717] w-full lg:w-1/2"
                    placeholder={userAddress || "Enter Your Address"}
                  />
                ) : (
                  <h2 className="text-xl font-bold">
                    {address ? address : "Unavailable"}
                  </h2>
                )}
              </div>
              <div className="mt-5">
                <p className="text-yellow-500 mb-1">Role:</p>
                {update ? (
                  <input
                    type="text"
                    className="px-4 py-2 rounded bg-[#171717] w-full lg:w-1/2"
                    defaultValue={singleUser?.role}
                    readOnly
                  />
                ) : (
                  <h2 className="text-xl font-bold ">{singleUser?.role}</h2>
                )}
              </div>
              <div className="mt-5 grid lg:grid-cols-2 gap-5 ">
                <div>
                  {update ? (
                    <button
                      onClick={handleUpdate}
                      className="py-3 uppercase bg-[#FFBA00] w-full text-white"
                    >
                      <FontAwesomeIcon className="me-2" icon={faEdit} />
                      update{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => setUpdate(true)}
                      className="py-3 uppercase bg-[#FFBA00] w-full text-white"
                    >
                      <FontAwesomeIcon className="me-2" icon={faEdit} />
                      Edit
                    </button>
                  )}
                </div>
                <div>
                  {update ? (
                    <button
                      onClick={handleCancel}
                      className="py-3 uppercase bg-red-500 w-full text-white"
                    >
                      <FontAwesomeIcon className="me-2" icon={faXmark} />
                      Cancel
                    </button>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="py-3 uppercase bg-red-500 w-full text-white"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faRightFromBracket}
                      />
                      log Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
