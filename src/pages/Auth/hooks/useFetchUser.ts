import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { setAuthUser } from "@/store/slices/authUserSlice";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../services/auth.gql";

function useFetchUser() {
  const dispatch = useAppDispatch();

  const { loading, error } = useQuery(FETCH_USER, {
    onCompleted(response) {
      dispatch(
        setAuthUser({
          ...response?.data?.user,
          isAuthenticated: true,
        })
      );
    },
  });

  return [loading, error];
}

export default useFetchUser;
