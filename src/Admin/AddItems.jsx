import { useForm } from "react-hook-form";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { enqueueSnackbar } from "notistack";
import useMyContext from "../hooks/useMyContext";

const AddItems = () => {
  const { user } = useMyContext();
  const [instance] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    instance
      .post(`/item?uid=${user?.uid}`, {
        productName: data?.name,
        price: parseFloat(data?.price),
        quantity: parseFloat(data?.quantity),
        category: data?.seletion,
        image: data?.image,
        details: data?.message,
      })
      .then(() => {
        reset();
        enqueueSnackbar(`Hi , Your product has been added Successfully `, {
          variant: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto w-11/12 lg:w-2/3 mt-20 mb-32 border border-opacity-30 rounded-lg border-slate-400 hover:-translate-y-4 duration-300 hover:duration-300">
      <h1 className="text-center text-5xl text-yellow-400 py-5  ">Add Item</h1>
      <hr className="w-1/2 mx-auto border-yellow-400 opacity-50" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Item Name"
            className="px-4 py-2 w-full bg-[#171717]  "
          />
          {errors.name && (
            <span className="text-red-500">This name field is required</span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
            className="px-4 py-2 w-full bg-[#171717]  "
          />
          {errors.price && (
            <span className="text-red-500">This price field is required</span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            {...register("quantity", { required: true })}
            type="number"
            placeholder="Quantity"
            className="px-4 py-2 w-full bg-[#171717]  "
          />
          {errors.quantity && (
            <span className="text-red-500">
              This quantity field is required
            </span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <input
            {...register("image", { required: true })}
            type="text"
            placeholder="Image Url"
            className="px-4 py-2 w-full bg-[#171717]  "
          />
          {errors.image && (
            <span className="text-red-500">This image field is required</span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <select
            className="px-4 py-2 w-full bg-[#171717] "
            {...register("seletion", { required: true })}
          >
            <option value="" selected disabled>
              Pick One{" "}
            </option>
            <option value="food">Food</option>
            <option value="snack">Snack</option>
            <option value="beverage">Beverage</option>
          </select>
          {errors.seletion && (
            <span className="text-red-500">
              This selection field is required
            </span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8 ">
          <textarea
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long.",
              },
            })}
            placeholder="Description"
            id=""
            cols="30"
            rows="10"
            className="px-4 py-4 w-full bg-[#171717]"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
        <div className="mx-4 lg:mx-20 my-8">
          <button className="bg-[#FFBA00] text-xl w-full mx-auto py-2  text-black rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
