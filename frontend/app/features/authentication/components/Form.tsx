'use client';

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";



export default function Form() {
    const [toggle, setToggle] = useState<"login" | "signup">("login");

    return toggle === "login"
    ? <LoginForm onToggleSignup={() => setToggle("signup")} />
    : <SignupForm onToggleLogin={() => setToggle("login")} />;
}