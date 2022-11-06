export interface AuthState {
  user: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}
