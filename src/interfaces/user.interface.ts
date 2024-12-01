export interface User {
    name:string;
    lastName:string;
    dateBirth:string;
    email:string;
    password:string;
}

export interface UserModel{
    id:number;
    name:string;
    lastName:string;
    dateBirth:string;
    email:string;
    password:string;
    roles:[{
        id: number,
        name:string
    }];
}

export interface registerResponse{
    message:string;
}