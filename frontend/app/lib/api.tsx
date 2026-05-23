import axios from 'axios';

type Signup = {
    user_fullname: string;
    user_password: string;
    user_phonenumber: string;
    user_email: string;
    user_address: string;
}
// use this for dev for now
const BACKEND_URL = "http://localhost"

// funktion til at kunne fetche fra vores backend asynkronsk
// bruger searchparams til at kunne omdanne til body
export async function create_user(data: Signup) {
    const response = await axios.post(
        `${BACKEND_URL}/api-signup`,
        // body argument
        new URLSearchParams(data),
    );
    return response.data // backend der sender JSON retur
}

