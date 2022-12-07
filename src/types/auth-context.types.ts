type LoginHandlerType = (email: string, password: string) => void;

type SignupHandlerType = (
  email: string,
  password: string
) => void;

type LogoutHandlerType = () => void;


export type UserType = {
    email: string;
    name: string;
  };

export type AuthContextType = {
    token: string;
    // setToken: React.Dispatch<React.SetStateAction<string>>;
    userId: string;
    // setUserId: React.Dispatch<React.SetStateAction<string>>;
    user: UserType;
    // setUser: React.Dispatch<React.SetStateAction<UserType>>;
    login: LoginHandlerType;
    signup: SignupHandlerType;
    logout: LogoutHandlerType;
    navigateOnLoginHandler:(path:string) => void
  }; 

  export type LocationState = {
    from: {
      pathname: string;
    };
  }