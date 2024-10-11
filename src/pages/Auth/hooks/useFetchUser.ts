import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { setAuthUser } from "@/store/slices/authUserSlice";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../services/auth.gql";

/**
 * used to fetch user data from the server and set it in the redux store
 * @returns   [loading, error]
 */
function useFetchUser() {
  const dispatch = useAppDispatch();

  // if there is no idToken in local storage, then no need to fetch user
  if (!localStorage.getItem("idToken")) {
    return [false, null];
  }

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
