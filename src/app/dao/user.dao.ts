import {response} from "../interfaces/response.interface";
import IUserResponse = response.IUserResponse;

export class User {
    firstname: string;
    lastname: string;
    nickname: string;
    age: number;
    gender: string;
    imageUrl: string;

    constructor(userResponse: IUserResponse) {
        this.firstname = userResponse.firstname;
        this.lastname = userResponse.lastname;
        this.nickname = userResponse.nickname;
        this.age = userResponse.age;
        this.gender = userResponse.gender;
        this.imageUrl = userResponse.imageUrl;
    }
}