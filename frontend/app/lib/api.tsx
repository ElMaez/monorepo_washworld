import axios from 'axios';
// Define the types for Signup
type Signup = {
    user_fullname: string;
    user_password: string;
    user_phonenumber: string;
    user_email: string;
    user_address: string;
}
// Define the types for the Login
type Login = {
    user_email: string;
    user_password: string;
}

// Define the type for resetting the password
type ForgotPassword = {
    user_email: string;
}
// Define the type for resetting the password
type ResetPassword = {
    user_password: string;
    confirm_password: string;
    key: string;
}
// use this for dev for now. Replace with actual link later (pythonanywhere)
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


// Get the user from the api-login in the backend
export async function login_user(data: Login){
    const response = await axios.post(
        `${BACKEND_URL}/api-login`,
        // body argument
        new URLSearchParams(data),
    );
    return response.data // 
}


export async function forgot_password(data: ForgotPassword) {
    const response = await axios.post(
        `${BACKEND_URL}/forgot-password`,
        new URLSearchParams(data),
    );
    return response.data
}

export async function reset_password(data: ResetPassword) {
    const response = await axios.patch(
        `${BACKEND_URL}/reset-password`,
        new URLSearchParams(data),
    );
    return response.data
}
