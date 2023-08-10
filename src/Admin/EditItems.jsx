import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";

const EditItems = () => {
  const { user } = useMyContext();
  const [updateItem, setUpdateItem] = useState({});
  const [instance] = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/singleItem/${id}?uid=${user?.uid}`)
      .then((res) => {
        setUpdateItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, instance, navigate, user?.uid]);

  const onSubmit = (event) => {
    event.preventDefault();

    const from = event.target;
    const productName = from.productName.value;
    const price = from.price.value;
    const quantity = from.quantity.value;
    const image = from.image.value;
    const details = from.details.value;

    const data = {
      productName,
      price: parseFloat(price),
      quantity: parseFloat(quantity),
      image,
      details,
    };

    instance
      .patch(`/singleItem/${id}?uid=${user?.uid}`, data)
      .then(() => {
        navigate(-1);
        enqueueSnackbar(`Hi , Your Item has been updated Successfully `, {
          variant: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-xl mx-auto w-11/12 lg:w-2/4 mt-20 mb-32 border border-opacity-30 rounded-lg border-slate-400 hover:-translate-y-4 duration-300 hover:duration-300">
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon
          className="mx-4 lg:mx-20 mt-10 text-2xl text-yellow-400"
          icon={faArrowAltCircleLeft}
        />
      </button>

      <h2 className="text-center font-bold text-3xl text-yellow-400 my-5">
        Update your Item Information
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            type="text"
            name="productName"
            placeholder="Item Name"
            defaultValue={updateItem?.productName}
            className="px-4 py-2 w-full bg-[#171717]  "
          />
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            name="price"
            type="number"
            placeholder="Price"
            defaultValue={updateItem?.price}
            className="px-4 py-2 w-full bg-[#171717]  "
          />
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            defaultValue={updateItem?.quantity}
            className="px-4 py-2 w-full bg-[#171717]  "
          />
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            name="image"
            type="text"
            placeholder="Photo URL"
            defaultValue={updateItem?.image}
            className="px-4 py-2 w-full bg-[#171717]  "
          />
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <textarea
            name="details"
            placeholder="Description"
            id=""
            cols="30"
            rows="10"
            defaultValue={updateItem?.details}
            className="px-4 py-4 w-full bg-[#171717]"
          ></textarea>
        </div>
        <div className="mx-4 lg:mx-20 my-8">
          <button className="bg-[#FFBA00] text-xl w-full mx-auto py-2  text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItems;
