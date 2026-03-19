
export interface IUser {
    name: string,
    email: string,
    password: string,
    date: Date,
    image?:any,
    role: 'admin' | 'customer',
}