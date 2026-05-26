import axios from "axios";
import type { User } from "@/app/global/types/global";
import type { Signup } from "@/app/global/types/global";
import type { Login } from "@/app/global/types/global";
import type { UpdateUser } from "@/app/global/types/global";
import type { ForgotPassword } from "@/app/global/types/global";
import type { ResetPassword } from "@/app/global/types/global";
import type { Location } from "../(features)/locationlist/hooks/useFilterLocations";
// globalt kald
axios.defaults.withCredentials = true;

// use this for dev for now. Replace with actual link later (pythonanywhere)
const BACKEND_URL = "http://localhost";

// Session
export async function api_user(): Promise<User> {
  const response = await axios.get(`${BACKEND_URL}/api-user`);
  return response.data.user;
}

// funktion til at kunne fetche fra vores backend asynkronsk
// bruger searchparams til at kunne omdanne til body
export async function create_user(data: Signup) {
  const response = await axios.post(
    `${BACKEND_URL}/api-signup`,
    // body argument
    new URLSearchParams(data),
  );
  return response.data; // backend der sender JSON retur
}

// Get the user from the api-login in the backend
export async function login_user(data: Login) {
  const response = await axios.post(
    `${BACKEND_URL}/api-login`,
    // body argument
    new URLSearchParams(data),
  );
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
}

// Opdatere bruger
export async function update_user(data: UpdateUser) {
  const response = await axios.patch(
    `${BACKEND_URL}/api-user`,
    new URLSearchParams(data),
  );

  return response.data
}

// Glemt Password
export async function forgot_password(data: ForgotPassword) {
  const response = await axios.post(
    `${BACKEND_URL}/forgot-password`,
    new URLSearchParams(data),
  );
  return response.data;
}

//Reset password
export async function reset_password(data: ResetPassword) {
  const response = await axios.patch(
    `${BACKEND_URL}/reset-password`,
    new URLSearchParams(data),
  );
  return response.data;
}

// Slet bruger
export async function delete_user() {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${BACKEND_URL}/delete-user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
// Logout
export async function logout() {
  await axios.post(`${BACKEND_URL}/logout`);
  localStorage.removeItem("token");
}

// locations
export async function getEventLocations(): Promise<Location[]> {
  const response = await fetch(
    "http://host.docker.internal/api-get-all-locations",
    { method: "GET", cache: "no-store" },
  );

  const data = await response.json();
  return data.locations ?? [];
}


export async function upload_avatar(file: File) {
  const formData = new FormData();
  formData.append("avatar", file);
  const response = await axios.post(`${BACKEND_URL}/api-user/avatar`, formData);
  return response.data;
}