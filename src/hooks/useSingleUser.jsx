import { useQuery } from "@tanstack/react-query";
import useMyContext from "../hooks/useMyContext";
import useAxiosSecure from "./useAxiosSecure";

const useSingleUser = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: singleUser,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["singleUser"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/singleUsers?uid=${user?.uid}`);
      return response.data;
    },
  });

  return [singleUser, refetch, isLoading];
};

export default useSingleUser;
