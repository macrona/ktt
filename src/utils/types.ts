
export interface UserType {
    name: string;
    password: string;
}
export interface User {
    name: string;
    id: number;
    score: number;
    user_group: number;
    avatar?: string;
}
export interface LoginResponseType {
    code: number;
    token: string;
    user: User;
}
export interface ActionType{
    type: string;
    payload?: any;
}
