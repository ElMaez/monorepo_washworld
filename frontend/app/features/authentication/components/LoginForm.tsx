"use client";

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";
// custom hook
import { useLogin } from "../hooks/useLogin";

type Props = { onToggleSignup: () => void };

export default function LoginForm({ onToggleSignup }: Props) {
  // useState
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // custom hook useLogin
  const signupMutation = useLogin();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    //smid custom hook ind i submit funktionen
    signupMutation.mutate({
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
            onChange={setEmail}
          />
          <Input
            type="password"
            name="user_password"
            label="user_password"
            inputLabel="Password"
            value={password}
            onChange={setPassword}
          />
        </fieldset>
        {signupMutation.isError && <p style={{ color: "red" }}>nopes</p>}
        {signupMutation.isSuccess && <p style={{ color: "green" }}>yeps</p>}
        <Button
          buttonName={signupMutation.isPending ? "Logger ind..." : "Log ind"}
          size="lg"
        />
        <Button
          type={"tertiary"}
          buttonName="Sign up"
          size="lg"
          onClick={onToggleSignup}
        />
      </form>
    </>
  );
}
