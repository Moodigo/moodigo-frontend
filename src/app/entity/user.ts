import {IUserResponse} from "../interfaces/response.interface";

export class User {
    id: string;
    firstname: string;
    lastname: string;
    nickname: string;
    age: number;
    gender: string;
    imageUrl: string;

    constructor(userConstructData: IUserResponse) {
        this.id = userConstructData.id;
        this.firstname = userConstructData.firstname;
        this.lastname = userConstructData.lastname;
        this.nickname = userConstructData.nickname;
        this.age = userConstructData.age;
        this.gender = userConstructData.gender;
        this.imageUrl = userConstructData.imageUrl;
    }
}
