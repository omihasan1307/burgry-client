import { useQuery } from "@tanstack/react-query";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "./useAxiosSecure";

const useOrderCollecionForUser = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: order,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["order"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/userOrders?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [order, refetch, isLoading];
};

export default useOrderCollecionForUser;
