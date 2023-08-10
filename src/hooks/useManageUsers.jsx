import useMyContext from "../hooks/useMyContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageUsers = () => {
  const { user, loading } = useMyContext();
  const [instance] = useAxiosSecure();
  const {
    data: manageUsers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/users?uid=${user.uid}`);
      return response.data;
    },
  });
  return [manageUsers, refetch, isLoading];
};

export default useManageUsers;
