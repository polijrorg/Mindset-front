export interface User {
    id: string;
    name: string;
    /* photo: string;
    cartao: string; */
    email: string;
    producer: boolean;
    token: string;
    // deixar apenas id e token
}

export interface InfosUser {
    id: string;
    name: string;
    /* photo: string;
    cartao: string; */
    email: string;
    producer: boolean;
}
export interface UpdateUser {
    id: string;
    name: string;
    email: string;
    producer: string;
}
