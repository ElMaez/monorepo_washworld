"use client";

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";
// custom hook
import { useLogin } from "../hooks/useLogin";

type Props = { onToggleSignup: () => void; onForgotPassword: () => void };

export default function LoginForm({ onToggleSignup, onForgotPassword }: Props) {
  // useState
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // handling errors 

  // custom hook useLogin
  const loginMutation = useLogin();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    //smid custom hook ind i submit funktionen
    loginMutation.mutate({
      user_email: email,
      user_password: password,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <Input
            type="text"
            name="email"
            label="email"
            inputLabel="Email"
            value={email}
            autoComplete={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            name="user_password"
            label="user_password"
            inputLabel="Password"
            value={password}
            onChange={setPassword}
            autoComplete={password}
          />
        </fieldset>
        {/* Sender error beskeden ned til vores loginMutation */}
        {loginMutation.isError && (
          <p style={{ color: "red" }}>Login fejlede</p>
        )}
        <Button
          buttonName={loginMutation.isPending ? "Logger ind..." : "Log ind"}
          size="lg"
        />
        <Button
          typeAction="button"
          elementType="button"
          type={"tertiary"}
          buttonName="Sign up"
          size="lg"
          onClick={onToggleSignup}
        />
        <Button
          typeAction="button"
          elementType="button"
          type={"tertiary"}
          buttonName="Forgot password? Reset here"
          size="lg"
          onClick={onForgotPassword}
        />
      </form>
    </>
  );
}
