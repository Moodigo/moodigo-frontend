import {IUserResponse} from "../interfaces/response.interface";

export class User {
    id: string;
    firstname: string;
    lastname: string;
    middlename: string;
    nickname: string;
    age: number;
    gender: string;
    imageUrl: string;

    constructor(userConstructData: IUserResponse) {
        this.id = userConstructData.id;
        this.firstname = userConstructData.firstname;
        this.middlename = userConstructData.middlename;
        this.lastname = userConstructData.lastname;
        this.age = userConstructData.age;
        this.imageUrl = userConstructData.imageUrl;
    }
}
