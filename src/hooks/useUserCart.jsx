import { useQuery } from "@tanstack/react-query";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "./useAxiosSecure";

const useUserCart = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: cartItem,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/cart?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [cartItem, refetch, isLoading];
};

export default useUserCart;
