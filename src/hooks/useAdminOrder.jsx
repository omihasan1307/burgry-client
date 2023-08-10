import { useQuery } from "@tanstack/react-query";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdminOrder = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: allOrders,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["adminOrder"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/adminOrders?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [allOrders, refetch, isLoading];
};

export default useAdminOrder;
