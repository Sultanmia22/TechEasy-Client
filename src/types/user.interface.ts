
export interface IUser {
    name: string,
    email: string,
    password: string,
    date: Date,
    image?:string,
    role: 'admin' | 'customer',
}

export interface ILoginData {
    email: string,
    password: string,
    rememberMe: boolean
}


export interface LoginResponse {
  success: boolean;
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      role: string;
      image?: string;
    };
    accessToken: string;
  };
}