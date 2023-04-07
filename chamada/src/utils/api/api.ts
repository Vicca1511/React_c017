import { LoginRequest } from "../requests/types";

 export const api= {
    login: async ({email , password}: LoginRequest ) => {
        const response = await fetch('http:// localhost3000/Authorization/login', {
            method : 'POST',
            headers : { 'Content-Type': 'application/json' },

            body : JSON.stringify({ email , password }),
        })
        return await response.json();
    }
}