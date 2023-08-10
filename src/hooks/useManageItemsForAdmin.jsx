import { useQuery } from "@tanstack/react-query";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "./useAxiosSecure";

const useManageItemsForAdmin = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: items,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["items"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/item?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [items, refetch, isLoading];
};

export default useManageItemsForAdmin;
