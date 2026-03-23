
export interface IUser {
    name: string,
    email: string,
    password: string,
    date: Date,
    image?:any,
    role: 'admin' | 'customer',
}

export interface ILoginData {
    email: string,
    password: string,
    rememberMe: boolean
}