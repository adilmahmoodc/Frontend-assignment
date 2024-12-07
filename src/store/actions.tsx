export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

interface Company {
  name: string;
  department: string;
  title: string;
  address?: {
    address: string;
  };
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: Company;
}

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: User[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

// Action Creators
export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: User[]): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Thunk Action to Fetch Data
export const fetchData = () => {
  return async (dispatch: (action: DataActionTypes) => void): Promise<void> => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(fetchDataSuccess(data.users)); // Assuming `data.users` contains the array of users
    } catch (error) {
      dispatch(fetchDataFailure((error as Error).message));
    }
  };
};
