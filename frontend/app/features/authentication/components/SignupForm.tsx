"use client";

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";
// custom hook
import { useSignup } from "../hooks/useSignup";


type Props = { onToggleLogin: () => void };

export default function SignupForm({ onToggleLogin }: Props) {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseplate, setLicenseplate] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [address, setAddress] = useState("");
  const signupMutation = useSignup();

  //Validering
  const errorData = (signupMutation.error as any)?.response?.data;
  const tooltip = errorData?.tooltip as string | undefined;
  const errorMessage = errorData?.error as string | undefined;

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    //smid custom hook ind i submit funktionen
    signupMutation.mutate({
      user_fullname: fullname,
      user_phonenumber: phoneNumber,
      user_email: email,
      user_address: address,
      user_password: password,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        {/* Fulde Navn */}
        <Input
          type="text"
          name="user_fullname"
          label="user_fullname"
          inputLabel="Full Name"
          value={fullname}
          onChange={setFullname}
        />
        {tooltip === "user_fullname" && ( <p>{errorMessage}</p>)}
        {/* Adresse */}
        <Input
          type="text"
          name="user_address"
          label="user_address"
          inputLabel="Adress"
          value={address}
          onChange={setAddress}
          />
          {tooltip === "user_address" && ( <p>{errorMessage}</p>)}
        {/* Mobilnummer */}
        <Input
          type="tel"
          name="user_phonenumber"
          label="user_phonenumber"
          inputLabel="Phonenumber"
          value={phoneNumber}
          onChange={setPhoneNumber}
          />
          {tooltip === "user_phonenumber" && ( <p>{errorMessage}</p>)}
        {/* Email */}
        <Input
          type="email"
          name="email"
          label="email"
          inputLabel="Email"
          value={email}
          onChange={setEmail}
        />
        {tooltip === "user_email" && ( <p>{errorMessage}</p>)}
        {/* Adgangskode */}
        <Input
          type="password"
          name="user_password"
          label="user_password"
          inputLabel="Password"
          value={password}
          onChange={setPassword}
        />
        {tooltip === "user_password" && ( <p>{errorMessage}</p>)}
      </fieldset>
      {/* Acceptere Vilkår */}
      <Input
        type="checkbox"
        name="acceptPolicy"
        label="acceptPolicy"
        inputLabel="Accept Policy"
        checked={consent}
        onChange={setConsent}
        required={true}
      />
      {signupMutation.isSuccess && <p style={{ color: "green" }}>{signupMutation.data?.msg ?? "Bruger oprettet"}</p>}
      <Button
        typeAction="submit"
        elementType="button"
        buttonName={
          signupMutation.isPending ? "Opretter bruger..." : "Opret Bruger"
        }
        size="lg"
        type="primary"
        status="normal"
      />
      {/* Knap til at toggle mellem login og signup*/}
      <Button
        typeAction="button"
        type={"tertiary"}
        buttonName="Login"
        size="lg"
        onClick={onToggleLogin}
      />
    </form>
  );
}
