import axios from "axios";
import {API_URL} from '@env';

export class AuthService {
    static async jwtLogin(values) {
        return await axios.post(API_URL + "/auth/login", values);
    }

    static async googleLogin(token) {
        return await axios.post(API_URL + "/auth/google-login", {token});
    }
}